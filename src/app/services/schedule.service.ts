import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Schedule } from '../models/schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  url: string = `./assets/mockdata/schedules.json`

  constructor(private http: HttpClient) { }


  getSchedules(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(this.url).pipe(
      catchError(this.handleError<Schedule[]>('getSchedules', []))
    )
  }

  /** create, read, update, delete schedule **/

  createSchedule(schedule: Schedule): Observable<Schedule> {
    return this.http.post<Schedule>(this.url, schedule, this.httpOptions).pipe(
      catchError(this.handleError<Schedule>('addschedule'))
    );
  }

  readSchedule(id: number): Observable<Schedule> {
    return this.getSchedules().pipe(
      map(schedules => schedules.find(schedule => schedule.id === id)),
      catchError(this.handleError<Schedule>(`readSchedule id= ${id}`))
    )
  }

  updateSchedule(schedule: Schedule): Observable<any> {
    return this.http.put(this.url, schedule, this.httpOptions).pipe(
    catchError(this.handleError<any>('updateSchedule'))
  );

  }

  deleteSchedule(schedule: Schedule | number) : Observable<Schedule> {
    const id = typeof schedule === 'number' ? schedule : schedule.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Schedule>(url, this.httpOptions).pipe(
      catchError(this.handleError<Schedule>('deleteHero'))
    )
  }

  /** create, read, update, delete schedule **/


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      alert(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
