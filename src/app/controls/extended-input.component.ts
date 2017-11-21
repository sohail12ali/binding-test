import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormControl } from "@angular/forms";

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
  @Input() minlength: any;

  constructor() { }

  ngOnInit() {
    console.log("Input Initialized");
    console.log(this.label);
    console.log(this.name);
    console.log(this.form);
    console.log(this.required);
    console.log(this.minlength);
  }

  Test(iname : any) {
    //console.log(iname.validator(new FormControl()));
  }
}
