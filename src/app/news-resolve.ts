import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { NewsService } from './news.service';

@Injectable()
export class NewsResolve implements Resolve<any>  {

    constructor(private newsdb: NewsService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<any> {
        // this.newsdb.getNewsPostById(route.paramMap.get('id')).subscribe(res => {

        // });
        console.log(route.paramMap.get('id'));
        return this.newsdb.getNewsPostById(route.paramMap.get('id'));
      }
}
