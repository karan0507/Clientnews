import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.scss']
})
export class SingleNewsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private newsdb: NewsService ) { }
  selectedPost: Array<any>;
  ngOnInit(): void {

    this.route.params
      .subscribe(res => {
        console.log(res);
        this.getPostById(res.id);
      }
      );
    }

   async getPostById(id) {
     await this.newsdb.getPostById(id).subscribe(res => {
        console.log(res);
        this.selectedPost = res;
      });
    }


}
