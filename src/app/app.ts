import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class App {
  title = 'app works!';
  private apiUrl = 'https://address-book-demo.herokuapp.com/api/contacts';

  constructor(private http: Http) {
    console.log('Hello fellow user');
  }

  getContacts() {
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json())

  }
}
