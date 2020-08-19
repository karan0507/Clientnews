// import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule, isPlatformBrowser } from '@angular/common';
// import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject, PLATFORM_ID, APP_ID } from '@angular/core';

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
import { NewsResolve } from './news-resolve';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';
import { FooterComponent } from './footer/footer.component';
import { SmallSideNewsComponent } from './small-side-news/small-side-news.component';
import { MiddleBigBannerComponent } from './middle-big-banner/middle-big-banner.component';
import { FormsModule } from '@angular/forms';


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
    SliderItemDirective,
    FooterComponent,
    SmallSideNewsComponent,
    MiddleBigBannerComponent,
  ],
  imports:[
    CommonModule,
    BrowserModule.withServerTransition({ appId: 'tour-of-heroes' }),
    HttpClientModule,
    NgxGoogleAnalyticsModule.forRoot('UA-150950243-1'),
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClient, CategoriesPipe, TruncatePipe, NewsResolve],
})
export class AppModule { 
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
