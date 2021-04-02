import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    
    if(this.router.url !== "/"){

      console.log(
        'changing color'
      );
    }
    
    console.log(this.router.url);
    
  }

}
