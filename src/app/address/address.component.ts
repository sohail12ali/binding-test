import { Component, OnInit, Input } from '@angular/core';
import { Address } from "app/app.component";
import { ControlContainer, NgForm } from "@angular/forms";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AddressComponent implements OnInit {
  @Input() address: Address;

  constructor() { }


  ngOnInit() {
  }


}
