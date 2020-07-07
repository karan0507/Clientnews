import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { SingleNewsComponent } from './single-news/single-news.component';
import { NewsResolve } from './news-resolve';


const routes: Routes = [
  {path: '', component: NewsComponent},
  {path: 'post/:id', component: SingleNewsComponent, resolve: { NewsResolve}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
