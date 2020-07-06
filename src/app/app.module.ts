import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './categories/categories.component';
import { RecentnewsComponent } from './recentnews/recentnews.component';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import { SideCardCarouselComponent } from './side-card-carousel/side-card-carousel.component';
import { CategoriesPipe } from './categories.pipe';
import { SingleNewsComponent } from './single-news/single-news.component';
import { TruncatePipe } from './truncate.pipe';
import { SliderItemDirective } from './side-card-carousel/slider-item.directive';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HeaderComponent,
    CategoriesComponent,
    RecentnewsComponent,
    CardCarouselComponent,
    SideCardCarouselComponent,
    CategoriesPipe,
    SingleNewsComponent,
    TruncatePipe,
    SliderItemDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [HttpClient, CategoriesPipe, TruncatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
