import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StationsService } from '../../services/stations.service';
import { IStation } from '../../models/Station';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit{

  constructor(private router: Router, private stationService: StationsService) { }
  stations$!: Observable<IStation[]>;

  navigateToSearch() {
    this.router.navigate(['/search']);
  }

  ngOnInit(): void {
    this.stations$ = this.stationService.getStations();
  }
}
