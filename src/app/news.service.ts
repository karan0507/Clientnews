import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNewsPost(): Observable<any>{
    return this.http.get(environment.apiUrl + 'post');
  }

  getNewsPostById(postId): Observable<any>{
    return this.http.get(environment.apiUrl + 'post' + postId);
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
}

