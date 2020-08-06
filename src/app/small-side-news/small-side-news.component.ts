import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-small-side-news',
  templateUrl: './small-side-news.component.html',
  styleUrls: ['./small-side-news.component.scss']
})
export class SmallSideNewsComponent implements OnInit {
lists;
smallnews: any;

  list = [
    {title: 'Your todays news is here and its interesting', time: '10 am' },
    {title: 'Your todays news is here and its interesting', time: '10 am'},
    {title: 'Your todays news is here and its interesting', time: '10 am' },
    {title: 'Your todays news is here and its interesting', time: '10 am' },
    {title: 'Your todays news is here and its interesting', time: '10 am'},
    {title: 'Your todays news is here and its interesting', time: '10 am' }
  ];
  constructor(private newdb: NewsService) { }

  ngOnInit(): void {
    this.getSmallNews();
  }
  getSmallNews() {
    this.newdb.getSmallNews().subscribe(res => {
          console.log(res);
          this.smallnews = res;
      
        });

  }
  

}

// getSmallNews() {
//   this.newdb.getLevel1().subscribe(res => {
//     console.log(res);
//     this.level1 = res;

//   });
// }