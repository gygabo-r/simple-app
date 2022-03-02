import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Fruit} from "./Fruit";
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:3000/api/fruits';

  getFruits() {
    return this.http.get<Fruit[]>(this.url);
  }

  saveFruit(f: Fruit) {
    return this.http.post<Fruit>(this.url, f, httpOptions);
  }
}
