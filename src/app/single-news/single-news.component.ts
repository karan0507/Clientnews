import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../news.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.scss']
})
export class SingleNewsComponent implements OnInit {
  list: any;
  unqiuePost: any;

  constructor(private route: ActivatedRoute, private newsdb: NewsService, private title: Title ) { }
  selectedPost;
  tags;
  tagsValue;
  
  ngOnInit(): void {
    this.route.data.subscribe(res => {
      console.log(res.NewsResolve);
      this.selectedPost = res.NewsResolve;
    });
    this.getNews();
    // this.title.setTitle(this.route.snapshot.data.NewsResolve.headline);
    // this.getPostById(this.route.snapshot.data.NewsResolve.id);
    // this.tags = this.route.snapshot.data.NewsResolve.tags_id;
    }

   async getPostById(id) {
     await this.newsdb.getPostById(id).subscribe(res => {
        console.log(res);
        this.selectedPost = res;
      });
    }

    getTagsValueById(tags) {
      console.log('hh');
      this.newsdb.getTagsById(tags).subscribe(res => {
       console.log(res);
       this.tagsValue = res;
     });

    }
    getPostDetails(id) {
      this.newsdb.getPostById(id).subscribe(postDetails => {
        console.log(postDetails);
        this.unqiuePost = postDetails;
      });
    }

    getNews() {
      this.newsdb.getNewsPost().subscribe(posts => {
        console.log(posts);
        this.list = posts;
      });
    }

}
