import { Component, OnInit } from '@angular/core';
import { Schedule } from 'src/app/models/schedule';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit {

  schedules: Schedule[];

  constructor(private scheduleService: ScheduleService) {
    this.scheduleService.getSchedules().subscribe((schedules) => {
      this.schedules = schedules
    })
   }

  ngOnInit(): void {
  }

}
