import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  we = [];
  private baseUrl = 'http://localhost:3000/';
  options: HttpHeaders;
  constructor(private http: HttpClient) {
    this.options = new HttpHeaders();
    this.options = this.options.set('Content-Type', 'application/json');

  }
  private getUrl(url: string = ''): string {
    return this.baseUrl + url;
  }
  public get(url: string = '', header: HttpHeaders): Observable<any> {
    const requestOptions = {
      headers: header
    };
    return this.http.get(this.getUrl(url), requestOptions);
  }
  public delete(url: string = '', header: HttpHeaders): Observable<any> {
    const requestOptions = {
      headers: header
    };
    return this.http.delete(this.getUrl(url), requestOptions);
  }
  public put(url: string = '', data: any, header: HttpHeaders): Observable<any> {
    const requestOptions = {
      headers: header
    };
    return this.http.put(this.getUrl(url), data, requestOptions);
  }
  public post(url: string = '', data: any, header: HttpHeaders): Observable<any> {
    const requestOptions = {
      headers: header
    };
    return this.http.post(this.getUrl(url), data, requestOptions);
  }
  async getPosts() {
    return this.get('goods', this.options).toPromise();
  }
  async putPostsById(id, data) {
    return this.put('goods/' + id, data, this.options).toPromise();
  }
  async deletePosts(id) {
    return this.delete('goods/' + id, this.options).toPromise();
  }
  async postPosts(data) {
    return this.post('goods', data, this.options).toPromise();
  }
}
