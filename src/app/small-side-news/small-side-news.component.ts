import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-side-news',
  templateUrl: './small-side-news.component.html',
  styleUrls: ['./small-side-news.component.scss']
})
export class SmallSideNewsComponent implements OnInit {
  list = [
    {title: 'Your todays news is here and its interesting', time: '10 am' },
    {title: 'Your todays news is here and its interesting', time: '10 am'},
    {title: 'Your todays news is here and its interesting', time: '10 am' },
    {title: 'Your todays news is here and its interesting', time: '10 am' },
    {title: 'Your todays news is here and its interesting', time: '10 am'},
    {title: 'Your todays news is here and its interesting', time: '10 am' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
