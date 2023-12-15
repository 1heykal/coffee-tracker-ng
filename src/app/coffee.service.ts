import { Injectable } from '@angular/core';
import { RECORDS } from './mock-records';
import { Record } from './record';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs';
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

  updateRecord(record: Record | undefined) : Observable<any> {
     return this.http.put(`${this.recordsUrl}/${record?.id}`, record).pipe(
      tap(_=> this.log({content: `updated record id=${record?.id}`, success: true})),
      catchError(this.handleError<any>('updateRecord'))
     );
  }

  addRecord(record: Record) : Observable<any> {
    return this.http.post(this.recordsUrl, record).pipe(
      tap(response => this.log({content: `added record id= ${(response as Record).id}`, success: true})),
      catchError(this.handleError<any>('addRecord'))
    );
  }

  deleteRecord(id: number) : Observable<any>{
    return this.http.delete(`${this.recordsUrl}/${id}`).pipe(
      tap( _ => this.log({content: `deleted record id=${id}`, success: true})),
      catchError(this.handleError<any>('delete record'))
   );
  }



  // httpOptions = {
  //   headers: new HttpHeaders({'Content-Type': 'application/json'})
  // };



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
