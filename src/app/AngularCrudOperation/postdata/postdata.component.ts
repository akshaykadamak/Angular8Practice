import { Component, OnInit } from '@angular/core';
import { home } from '../../model/home.model';
import {AngularcrudService} from "../angularcrud.service";

@Component({
  selector: 'app-postdata',
  templateUrl: './postdata.component.html',
  styleUrls: ['./postdata.component.scss']
})
export class PostdataComponent implements OnInit {
  home = home;
  data: string;
  constructor(
    private sharedServive: AngularcrudService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.sharedServive.getData().subscribe( data =>
    {
      this.data = data[0];
      console.log(this.data);
    })
  }

  onSubmit()
  {
    console.log(this.home);
    this.sharedServive.createData(this.home).subscribe
    (data => {
      console.log('post successfully done');

    })
  }
}
