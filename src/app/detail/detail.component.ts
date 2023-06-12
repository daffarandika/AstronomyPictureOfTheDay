import { Component, Input, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AstronomyService } from '../astronomy.service';
import { Fact } from '../fact';
import { ChangeDetectorRef, AfterContentChecked} from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  constructor(
    private route: ActivatedRoute,
    private astronomyService: AstronomyService,
    private cdRef: ChangeDetectorRef,
  ){}

  ngAfterViewInit() {
    window.onload = () => {
    }
  }

  @Input() fact?: Fact;
  date: string = "" 
  ngOnInit(){
    this.getFact()
  }
  getFact(){
    this.date = this.route.snapshot.paramMap.get('date')!.toString()
    this.astronomyService.getFactByDate(this.date).subscribe(
      f => this.fact = f
    )
  }
  ngAfterContentChecked(){
    // this.scrollToContent()
  }
  scrollToContent() {
    const fact = document.getElementById('fact')!
    window.scrollTo({
      top: fact.offsetTop - 60,
      behavior: 'smooth',
    })
  }
}
