import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'extended-input',
  templateUrl: './extended-input.component.html',
  styleUrls: ['./extended-input.component.css']
})
export class ExtendedInputComponent implements OnInit {

  @Input() label: string;
  @Input() name: string;
  @Input() form: NgForm;
  @Input() required: boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
