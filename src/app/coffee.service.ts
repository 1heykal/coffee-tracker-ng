import { Injectable } from '@angular/core';
import { RECORDS } from './mock-records';
import { Record } from './record';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  private recordsUrl = 'http://localhost:5205/record';

  constructor(private messageService: MessageService,
    private http: HttpClient) { }

  getRecords(): Observable<Record[]> {
    this.log('fetched records.');
    return this.http.get<Record[]>(this.recordsUrl).pipe(
      tap(_ => this.log('fetched records')),
      catchError(this.handleError<Record[]>('getRecords', []))
    );
  }

  getRecord(id: number): Observable<Record> {

    return this.http.get<Record>(`${this.recordsUrl}/${id}`)
    .pipe(
      tap(_=> this.log(`fetched record id=${id}`)),
      catchError(this.handleError<Record>(`getRecord id=${id}`))
    );

  }

  updateRecord(record: Record | undefined) : Observable<any> {
     return this.http.put(`${this.recordsUrl}/${record?.id}`, record).pipe(
      tap(_=> this.log(`updated record id=${record?.id}`)),
      catchError(this.handleError<any>('updateRecord'))
     );
  }

  // httpOptions = {
  //   headers: new HttpHeaders({'Content-Type': 'application/json'})
  // };



  private log(message: string){
    this.messageService.add(`CoffeeService: ${message}`);

  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any) : Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }
}
