import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable, of } from 'rxjs';
import { Schedule } from '../models/schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  url: string = `./assets/mockdata/schedules.json`

  constructor(private httpClient: HttpClient) { }

  getSchedules(): Observable<Schedule[]>{
    return this.httpClient.get<Schedule[]>(this.url)
  }

  getSchedule(id): Observable<Schedule>{
    let schedules;

    this.getSchedules().subscribe(sched => schedules)
    
    return of(schedules.find(schedule => schedule.id === id))
  }
}
