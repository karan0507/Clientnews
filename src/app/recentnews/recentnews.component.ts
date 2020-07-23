import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recentnews',
  templateUrl: './recentnews.component.html',
  styleUrls: ['./recentnews.component.scss']
})
export class RecentnewsComponent implements OnInit {
  list = [
    {title: 'Your todays news is here and its interesting', time: '10 am' },
    {title: 'Your todays news is here and its interesting', time: '10 am'},
    {title: 'Your todays news is here and its interesting', time: '10 am' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
