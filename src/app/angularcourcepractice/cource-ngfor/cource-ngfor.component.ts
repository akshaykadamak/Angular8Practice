import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cource-ngfor',
  templateUrl: './cource-ngfor.component.html',
  styleUrls: ['./cource-ngfor.component.scss']
})
export class CourceNgforComponent implements OnInit {

  names = ['akshay','prasad'];
  clients: string[];
  Years: number[] = [];
  TeamMembersSummary = [];
  TeamMember = [];

  constructor() { }

  ngOnInit() {
    this.clients = ["ABC","BCA","CAB","BAC"];

    for(var i=2017; i>= 2010; i--)
    {
      this.Years.push(i);
    }

    this.TeamMembersSummary = [
      { Region: "East", TeamMembersCount: 20, Status: "available"},
      { Region: "West", TeamMembersCount: 30, Status: "Busy"}
    ]

    this.TeamMember = [
      {
        Region: "East", Members: [
          {id: 1, name: "ak", status: "available"}
        ]
      },
      {
        Region: "East", Members: [
          {id: 2, name: "pk", status: "busy"}
        ]
      }
    ];
  }

}
