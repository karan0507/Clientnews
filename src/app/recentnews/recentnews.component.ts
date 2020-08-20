import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-recentnews',
  templateUrl: './recentnews.component.html',
  styleUrls: ['./recentnews.component.scss']
})
export class RecentnewsComponent implements OnInit {
  recentnews: any; 

  list = [
    {title: 'Your todays news is here and its interesting', time: '10 am' },
    {title: 'Your todays news is here and its interesting', time: '10 am'},
    {title: 'Your todays news is here and its interesting', time: '10 am' }
  ];

  next;  
  previous; 
  constructor(private newdb: NewsService) { }

  ngOnInit(): void {
    this.getRecentNews();
  }
  getRecentNews() {
    this.newdb.getRecentNews().subscribe(res => {
      console.log(res);
      this.recentnews = res.data;
      this.next = res.next_page_url;
      this.previous = res.prev_page_url;
    });
  }
  nextRecent(){

  }
  previousRecent(){

  }

}
