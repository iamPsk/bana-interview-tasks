import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { Schedule } from 'src/app/models/schedule';
import { ScheduleService } from 'src/app/services/schedule.service';
// import { Location } from "@angular/common"

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.component.html',
  styleUrls: ['./schedule-detail.component.scss']
})
export class ScheduleDetailComponent implements OnInit {
  
  schedule: Schedule;

  headElements = ['Origin station', 'Destination station', 'Cost'];

  constructor(private route: ActivatedRoute,
              private scheduleService: ScheduleService,             
              ) { }

  ngOnInit(): void {
    this.getSchedule()
  }

  getSchedule():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.scheduleService.readSchedule(id).subscribe( schedule => this.schedule = schedule)
  }
}
