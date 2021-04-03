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

  
  // create, read, update, delete schedule

  createSchedule(schedule: Schedule): void{

  }

  readSchedule(id: number){
    
    console.log(this.getSchedules().subscribe( schedule => schedule));
    
    return of(this.getSchedules().subscribe( schedule => {return schedule}))
    
  }

  updateSchedule(id: number, schedule: Schedule) {

  }

  deleteSchedule(id: number) {

  }

  // create, read, update, delete schedule


  // error handling
  
}
