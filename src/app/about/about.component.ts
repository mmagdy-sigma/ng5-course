import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  goals: any;
  
  constructor(private route: ActivatedRoute, 
              private router: Router,
              private data: DataService) {

    this.route.params.subscribe(resp => console.log(resp.id));
   }

  ngOnInit() {
    this.data.goal.subscribe(goals => this.goals = goals);
  }

  sendMeHome() {
    this.router.navigate(['']);
  }
}
