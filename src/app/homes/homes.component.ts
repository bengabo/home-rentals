import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: []
})
export class HomesComponent implements OnInit {

  homeTypeDrowndownOpen: boolean = false;
  currentHomeTypeFilters: string[] = [];

  homes$ = this.dataService.homes$;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      const homeTypeFilters = params['home-type'] || [];
      this.dataService.loadHomes(homeTypeFilters);
      this.currentHomeTypeFilters = homeTypeFilters;
    })
  }

  homeTypeFilterApplied($event) {
    this.homeTypeDrowndownOpen = false;
    this.router.navigate(['homes'], { queryParams: { 'home-type': $event}});
  }
}
