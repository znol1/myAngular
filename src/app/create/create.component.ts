import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ServiceService} from '../service.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  createForm: FormGroup;
  @ViewChild('name', {static: false}) name: ElementRef;
  @ViewChild('number', {static: false}) number: number;
  constructor(private services: ServiceService) {
    this.createForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      id: new FormControl(null, []),
      number: new FormControl(null, [Validators.required])
    });
  }
  async toBd(workerData: { id: number, name: string, status: boolean, number: number }) {
    workerData.id = Date.now();
    workerData.name = this.createForm.value.name;
    workerData.number = this.createForm.value.number;
    workerData.status = false;
    try {
      await this.services.postPosts(workerData);
    } catch (err) {
      console.log(err);
    }
  }
}
