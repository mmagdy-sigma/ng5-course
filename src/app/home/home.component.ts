import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('goals', [
      transition('* => *', [

        query(':enter', style({opacity: 0}), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset:0}),
            style({opacity: .5, transform: 'translateY(35px)', offset:.3}),
            style({opacity: 1, transform: 'translateY(0)', offset:1}),
          ]))
        ]), {optional: true}),

      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  itemsCount: number = 4;
  btnText: string = "Add an item";
  goalText: string = "My life goal"; 
  goals = ["My First life goal", "I want to climb mountain", "Go ice skiing"];

  constructor() { }

  ngOnInit() {
    this.itemsCount = this.goals.length;
  }

  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemsCount = this.goals.length;
  }

  removeItem(i) {
    this.goals.splice(i, 1);
  }

}
