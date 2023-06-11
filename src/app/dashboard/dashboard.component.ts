import { Component } from '@angular/core';
import { AstronomyService } from '../astronomy.service';
import { Fact } from '../fact';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  facts: Fact[] = []

  constructor(private astronomyService: AstronomyService){}

  ngOnInit(){
    this.astronomyService.getFacts()
    .subscribe(t => this.facts = t)
  }

}
