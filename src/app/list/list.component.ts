import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private services: ServiceService) { }
  string;
  public typeSort = true;
  public Sort = true;

  async ngOnInit() {
    try {
      let posts = this.services.getPosts();
      posts = (isNullOrUndefined(await posts)) ? [] : await posts;
      console.log(posts);
      this.services.we = await posts;
    } catch (err) {
      console.log(err);
    }
    this.services.we = this.services.we.sort((a, b) => {
        if (a.status < b.status) { return -1; }
      });
  }
  async edBd(workerData: { id: number, name: string, status: boolean, number: number }) {
    try {
      await this.services.putPostsById(workerData.id, workerData);
      this.ngOnInit();
    } catch (err) {
      console.log(err);
    }
  }
  async cBd(workerData: { id: number, name: string, status: boolean, number: number }) {
    try {
      await this.services.putPostsById(workerData.id, workerData);
      this.ngOnInit();
    } catch (err) {
      console.log(err);
    }
  }
  async delBd(workerData: {id: number }) {
    try {
      await this.services.deletePosts(workerData.id);
      this.ngOnInit();
    } catch (err) {
      console.log(err);
    }
  }
  async toBd(workerData: { id: number, name: string, status: boolean, number: number }) {
    try {
      await this.services.postPosts(workerData);
      this.ngOnInit();
    } catch (err) {
      console.log(err);
    }
  }
  sort(s, Sort) {
      this.services.we = s.sort((a, b) => {
        if (a.name < b.name) { return -1; }
      });
  }
}
