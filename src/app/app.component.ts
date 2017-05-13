import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../css/foundation.css']
})
export class AppComponent {
  title = 'Homebrew Hub';

  constructor(private router: Router) { }

  clickAdmin() {
      this.router.navigate(['admin']);
  }
}
