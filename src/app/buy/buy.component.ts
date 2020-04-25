import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent {
  editForm: FormGroup;
  @Input() buy: { id: number, name: string, status: boolean, number: number };
  @Output() delbuy = new EventEmitter<{ id: number }>();
  @Output() cbuy = new EventEmitter<{  id: number, name: string, status: boolean, number: number  }>();
  @Output() editbuy = new EventEmitter<{ id: number, name: string, status: boolean, number: number }>();
  @Output() bd = new EventEmitter<{ id: number, name: string, status: boolean, number: number }>();
  constructor(private services: ServiceService) {
    this.editForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      id: new FormControl(null, []),
      number: new FormControl(null, [Validators.required])
    });
  }
  t = false;
  delete() {
    this.delbuy.emit({
      id: this.buy.id
    });
  }
  edit(t) {
    this.editbuy.emit({
      id: this.buy.id,
      name: this.editForm.value.name,
      status: t,
      number: this.editForm.value.number,
    });
  }
  edits(t, name1, num1) {
    this.cbuy.emit({
      id: this.buy.id,
      name: name1,
      status: t,
      number: num1,
    });
  }

}
