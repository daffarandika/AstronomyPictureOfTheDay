import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.css']
})
export class LayoutHeaderComponent {
  ngAfterViewInit(){
    const nav = document.getElementById('nav')!
    const sticky = nav.offsetTop;
    window.onscroll = () => {
      console.log(`${ sticky } ${window.scrollY}`)
      if (window.scrollY > sticky) {
        nav.classList.add('sticky')
      } else {
        nav.classList.remove('sticky')
      }
    }
  }
}
