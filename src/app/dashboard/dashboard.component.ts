import { Component } from '@angular/core';
import { AstronomyService } from '../astronomy.service';
import { Fact } from '../fact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  facts: Fact[] = []

  constructor(
    private astronomyService: AstronomyService,
    private router: Router
  ){}

  ngOnInit(){
    this.astronomyService.getFacts()
    .subscribe(t => this.facts = t)
  }

  navigateToDetail() {
    // this.router.navigateByUrl('/detail')
  }

}
