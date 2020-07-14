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

  constructor(private route: ActivatedRoute, private newsdb: NewsService, private title: Title ) { }
  selectedPost;
  tags;
  tagsValue;
  
  ngOnInit(): void {
    this.title.setTitle(this.route.snapshot.data.NewsResolve.headline);
    this.getPostById(this.route.snapshot.data.NewsResolve.id);
    this.tags = this.route.snapshot.data.NewsResolve.tags_id;
    console.log(JSON.parse(this.tags));
    // this.tags.push('4');
    let test =  JSON.parse(this.tags);
    test.forEach( function(val) {
      console.log(val);
      this.getTagsValueById(val);
    });
    // JSON.parse(this.tags.forEach(function(value)  {
    //   this.getTagsValueById(value);
    // });
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

}
