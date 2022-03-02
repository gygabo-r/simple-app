import {Component, OnInit} from '@angular/core';
import {Person} from "./Person";
import {Fruit} from "./Fruit";
import {FruitService} from "./fruit.service";
import {PersonService} from "./person.service";
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  persons: Person[] = [];
  fruits: Fruit[] = [];
  fruitForm = this.formBuilder.group({
    jsonData: '',
  });

  personForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    dateOfBirth: ''
  });

  constructor(private fruitService: FruitService, private personService: PersonService, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.loadFruits();
    this.loadPersons();
  }

  private loadPersons() {
    this.personService.getPersons().subscribe(d => this.persons = d);
  }

  private loadFruits() {
    this.fruitService.getFruits().subscribe((d) => this.fruits = d);
  }

  stringify(v: any){
    return JSON.stringify(v);
  }

  onFruitSubmit(): void {
    const fruit: Fruit = JSON.parse(this.fruitForm.value.jsonData);
    this.fruitService.saveFruit(fruit).subscribe(d => this.loadFruits());
  }

  onPersonSubmit(): void {
    const person: Person = this.personForm.value;
    this.personService.savePerson(person).subscribe(d => this.loadPersons());
  }
}
