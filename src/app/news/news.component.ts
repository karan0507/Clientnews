import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  
list;
// categories = [{name: 'TOP NEW'}, {name: 'SPORTS'}, {name: 'BOLLYWOOD'}, {name: 'TECHNO LOVER'}];
unqiuePost;
categories;

  constructor(private newdb: NewsService, private metaTagService: Meta) {

   }

  ngOnInit(): void {
    // console.log(this.list);
    this.getNews();
    this.getCategories();
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Garja Maharashtra, Marathi News, Sushant Singh Suicide' },
      // { name: 'robots', content: 'index, follow' },
      // { name: 'author', content: 'Digamber Singh' },
      // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
  }

  func() {
    if (this.list.length > 6) {
      console.log('its more han 6', this.list.length);
      // this.show();
    }
  }

  getNews() {
    this.newdb.getNewsPost().subscribe(posts => {
      console.log(posts);
      this.list = posts;
    });
  }

  hide(cat1, cat2) {
    console.log(cat1);
    console.log(cat2);
    // this.getCategories()
  }
  getPostDetails(id) {
    this.newdb.getPostById(id).subscribe(postDetails => {
      console.log(postDetails);
      this.unqiuePost = postDetails;
    });
  }


  getCategories(){ 
    this.newdb.getCategory().subscribe(categories => {
      console.log(categories);
      this.categories = categories;
    });
  }
  // show() {
  //   let val = Object.keys(this.list)[6];
  //   for (val in this.list) {
  //     console.log(val['headline']);
  //   }
  //   //console.log(val, 'value');
  // }
}
