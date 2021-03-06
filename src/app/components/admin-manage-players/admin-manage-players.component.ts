import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-admin-manage-players',
  templateUrl: './admin-manage-players.component.html',
  styleUrls: ['./admin-manage-players.component.css']
})
export class AdminManagePlayersComponent implements OnInit {
  players: any;

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.restService.getPlayers().subscribe(
      res => this.players = res,
      err => console.error(err));
  }
}