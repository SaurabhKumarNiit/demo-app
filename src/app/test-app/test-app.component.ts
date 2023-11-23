import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-test-app',
  templateUrl: './test-app.component.html',
  styleUrls: ['./test-app.component.css'],
})
export class TestAppComponent {
// constructor(private router:Router){}

navbarState = true;

toggleNavbar() {
  this.navbarState = !this.navbarState;
}

closeNavbar() {
  this.navbarState = false;
}


}
