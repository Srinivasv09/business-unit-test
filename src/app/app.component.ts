import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(private router: Router) { }

  //Open BusinessUnit-page.
  openBusinessUnit() {
    this.router.navigate(['/businessunit']);
  }

  //Open the Home-page.
  openDashboard(){
    this.router.navigate(['']);
  }

}
