import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { SingleNewsComponent } from './single-news/single-news.component';
import { NewsResolve } from './news-resolve';
import { RecentnewsComponent } from './recentnews/recentnews.component';
import { SmallSideNewsComponent } from './small-side-news/small-side-news.component';
import { MiddleBigBannerComponent } from './middle-big-banner/middle-big-banner.component';


const routes: Routes = [
  {path: '', component: NewsComponent},
  {path: 'post/:id', component: SingleNewsComponent, resolve: { NewsResolve}},
  {path: 'recent', component: RecentnewsComponent},
  {path: 'small', component: SmallSideNewsComponent},
  {path: 'middle', component: MiddleBigBannerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
