import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  getMiddleBanner(): Observable<any> {
    return this.http.get(environment.apiUrl + 'big' );
  }
  getRecentNews(): Observable<any> {
    return this.http.get(environment.apiUrl + 'recents' );
  }

  constructor(private http: HttpClient) { }

  getNewsPost(): Observable<any>{
    return this.http.get(environment.apiUrl + 'post');
  }

  getNewsPostById(postId): Observable<any>{
    return this.http.get(environment.apiUrl + 'post/' + postId);
  }

  getPostById(id): Observable<any> {
    return this.http.get(environment.apiUrl + 'post/' + id);
  }

  getCategory(): Observable<any>{
    return this.http.get(environment.apiUrl + 'categories');
  }

  getCategoryById(categoriesId): Observable<any>{
    return this.http.get(environment.apiUrl + 'categories/' + categoriesId);
  }

  getTags(): Observable<any>{
    return this.http.get(environment.apiUrl + 'tags');
  }

  getTagsById(id): Observable<any> {
    return this.http.get(environment.apiUrl + 'tags/' + id );
  }

  getLevel1(): Observable<any>{
    return this.http.get(environment.apiUrl + 'level1');
  }

  getLevel2(): Observable<any>{
    return this.http.get(environment.apiUrl + 'level2');
  }
  getLevel3(): Observable<any>{
    return this.http.get(environment.apiUrl + 'level3');
  }

  getSmallNews(): Observable<any>{
return this.http.get(environment.apiUrl + 'smallnews' );
  }

}

