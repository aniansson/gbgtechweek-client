import { Component } from '@angular/core';
import { App } from './app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';

  contacts: any = {};
  constructor(private appService: App) {
    this.getContacts();
  }

  getContacts() {
    this.appService.getContacts().subscribe(data => {
      console.log(data);
     this.contacts = data
    })
  }
}
