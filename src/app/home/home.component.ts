import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  itemsCount: number = 4;
  btnText: string = "Add an item";
  goalText: string = "My life goal"; 
  goals = [];

  constructor() { }

  ngOnInit() {
    this.itemsCount = this.goals.length;
  }

  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemsCount = this.goals.length;
  }

}
