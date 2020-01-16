import { Component, OnInit } from '@angular/core';
import { home } from '../model/home.model';

@Component({
  selector: 'app-crudoperations',
  templateUrl: './crudoperations.component.html',
  styleUrls: ['./crudoperations.component.scss']
})
export class CrudoperationsComponent implements OnInit {

  home = new home();
  homearray = [];

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.homearray.push(this.home);
    this.home = new home();
  }
}
