import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
filterarg = '1';
list;
style;
// // categories = [{name: 'TOP NEW'}, {name: 'SPORTS'}, {name: 'BOLLYWOOD'}, {name: 'TECHNO LOVER'}];
unqiuePost;
categories;
categoriesId: any;
hideid = false;
  level1: any;
  level2: any;
  level3: any;
  constructor(private newdb: NewsService, private metaTagService: Meta, private titleService: Title) {

   }

  ngOnInit(): void {
    this.titleService.setTitle('Garja Maharashtra | Home');
    // console.log(this.list);
    this.getLevel1News();
    this.getLevel2News();
    this.getLevel3News();
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
    // if (cat1 !== cat2) {
    //     this.hideid = !this.hideid;
    // }
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

  getCategoriesById(){
    this.newdb.getCategoryById(this.categoriesId).subscribe(categories => {
      console.log(categories);
      this.categories = categories;
    });
  }

  getLevel1News() {
    this.newdb.getLevel1().subscribe(res => {
      console.log(res);
      this.level1 = res;

    });
  }

  getLevel2News() {
    this.newdb.getLevel2().subscribe(res => {
      console.log(res);
      this.level2 = res;

    });
  }

  getLevel3News() {
    this.newdb.getLevel3().subscribe(res => {
      console.log(res);
      this.level3 = res;

    });
  }


}
