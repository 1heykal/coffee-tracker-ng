import { Injectable } from '@angular/core';
import { Record } from './record';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  private recordsUrl = 'http://localhost:5205/record';

  constructor(private messageService: MessageService,
    private http: HttpClient) { }

  getRecords(): Observable<Record[]> {
    return this.http.get<Record[]>(this.recordsUrl).pipe(
      tap(_ => this.log({content: 'fetched records', success: true})),
      catchError(this.handleError<Record[]>('getRecords', []))
    );
  }

  getRecord(id: number): Observable<Record> {

    return this.http.get<Record>(`${this.recordsUrl}/${id}`)
    .pipe(
      tap(_=> this.log({content: `fetched record id=${id}`, success: true})),
      catchError(this.handleError<Record>(`getRecord id=${id}`))
    );

  }

  updateRecord(record: Record) : Observable<Record> {
     return this.http.put<Record>(`${this.recordsUrl}/${record?.id}`, record).pipe(
      tap(_=> this.log({content: `updated record id=${record?.id}`, success: true})),
      catchError(this.handleError<Record>('updateRecord'))
     );
  }

  addRecord(record: Record) : Observable<Record> {
    return this.http.post<Record>(this.recordsUrl, record).pipe(
      tap((record: Record) => this.log({content: `added record id= ${record.id}`, success: true})),
      catchError(this.handleError<Record>('addRecord'))
    );
  }

  deleteRecord(id: number) : Observable<Record>{
    return this.http.delete<Record>(`${this.recordsUrl}/${id}`).pipe(
      tap( _ => this.log({content: `deleted record id=${id}`, success: true})),
      catchError(this.handleError<Record>('delete record'))
   );
  }

  searchRecords(term: string): Observable<Record[]>{
    if(!term.trim())
      return of([]);

      return this.http.get<Record[]>(`${this.recordsUrl}/search?term=${term}`).pipe(
        tap( records => records.length ? this.log({content: `found records matching "${term}"`, success: true}) : 
        this.log({content: `no records matching "${term}"`, success: false})),
        catchError(this.handleError<Record[]>('searchRecords', []))
      );
  }

 /*  getRecordNo404
 
    getRecordNo404<Data>(id: number): Observable<Record>{
    return this.http.get<Record[]>(`${this.recordsUrl}/?id=${id}`).pipe(
      map(records => records[0]), // returns a {0 | 1} element array
      tap(record => {
        const outcome = record ? 'fetched' : 'did not find';
        this.log({content: `${outcome} record id=${id}`, success: true})
      }),
      catchError(this.handleError<Record>(`getRecord id=${id}`))
    );
  } 
*/


/* httpOptions

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

*/


  private log(message: Message){
    message.content = `CoffeeService: ${message.content}`
    this.messageService.add(message);

  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any) : Observable<T> => {
      console.error(error);
      
      this.log({content: `${operation} failed: ${error.message}`, success: false });

      return of(result as T);
    }
  }

  
}
