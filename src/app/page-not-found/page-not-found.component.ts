import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {
  constructor() {
  }
  ngAfterViewInit(){
    const notFound = document.getElementById('not-found')!;
    window.onload = () => {
      window.scrollTo({
        top:notFound.offsetTop,
        behavior:'smooth',
      })
    }
  }
}
