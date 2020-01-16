import { Component, OnInit } from '@angular/core';
import {home} from "./home.model";

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

  home = new home();
  constructor() { }

  ngOnInit() {
  }

}
