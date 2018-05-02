import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logo:string = "../assets/Logo.png";
  constructor() { }

  ngOnInit() {
  }

  RoomOptions = [
    {value: '1 Room, 2 Adults, 0 children', viewValue: '1 Room, 2 Adults, 0 children'},
    {value: '1 Room, 1 Adults, 0 children', viewValue: '1 Room, 1 Adult, 0 children'},
    {value: 'More Options', viewValue: 'More Options'}
  ];
}
