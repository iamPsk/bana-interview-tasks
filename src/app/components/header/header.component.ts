import { filter } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from "@angular/router"
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  
  navStart: Observable<NavigationStart>;
  // nav: HTMLElement = document.getElementsByTagName("nav")[0]
  
  constructor(public router: Router, private route: ActivatedRoute) {
    
    // Create a new Observable that publishes only the NavigationStart event
    this.navStart = router.events.pipe(
      filter(evt => evt instanceof NavigationStart)
    ) as Observable<NavigationStart>;
  
  }

  ngOnInit(): void {
    /****************************************** hack**********************/
    this.navStart.subscribe( evt => {
      if(evt.url !== "/"){
            document.getElementsByTagName("nav")[0].classList.remove('transparent')
            document.getElementsByTagName("nav")[0].classList.add('top-nav-collapse')
            document.getElementsByTagName("nav")[0].classList.remove('navbar-dark')
            document.getElementsByTagName("nav")[0].classList.add('navbar-light')
          } else {
            document.getElementsByTagName("nav")[0].classList.add('navbar-dark')
            document.getElementsByTagName("nav")[0].classList.remove('navbar-light')
            
            document.getElementsByTagName("nav")[0].classList.add('transparent')
            document.getElementsByTagName("nav")[0].classList.remove('top-nav-collapse')
          }
        })
    /****************************************** hack**********************/
  }

}