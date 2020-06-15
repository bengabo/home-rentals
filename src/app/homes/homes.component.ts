import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: []
})
export class HomesComponent implements OnInit {

  homeTypeDrowndownOpen = false;

  homes$ = this.dataService.getHomes();

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  homeTypeFilterApplied($event) {
    this.homeTypeDrowndownOpen = false;
    this.router.navigate(['homes'], { queryParams: { 'home-type': $event}});
  }
}
