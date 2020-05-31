import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-player-schedule',
  templateUrl: './player-schedule.component.html',
  styleUrls: ['./player-schedule.component.css']
})
export class PlayerScheduleComponent implements OnInit {
  data: any;

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.restService.getPlayerSchedule().subscribe(
      res => this.data = res,
      err => console.error(err));
  }

}
