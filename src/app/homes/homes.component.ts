import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: []
})
export class HomesComponent implements OnInit {

  homeTypeDrowndownOpen = false;

  homes$ = this.dataService.getHomes();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

}
