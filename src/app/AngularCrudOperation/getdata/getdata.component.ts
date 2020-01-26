import { Component, OnInit } from '@angular/core';
import {AngularcrudService } from '../angularcrud.service';
import { home } from '../../model/home.model'
@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.scss'],
})
export class GetdataComponent implements OnInit {
  data: string;
  constructor(private SharedserviceService: AngularcrudService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.SharedserviceService.getData().subscribe( data =>
    {
      this.data = data[0];
      console.log(this.data);
    })
  }
}
