import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Person} from "./Person";
import {Fruit} from "./Fruit";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:3000/api/persons';

  getPersons() {
    return this.http.get<Person[]>(this.url);
  }

  savePerson(f: Person) {
    return this.http.post<Person>(this.url, f, httpOptions);
  }
}
