import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';


  public userModel: UserModel;

  constructor() {


    var user = new User();
    user.firstName = 'Irshad';
    user.lastName = 'Ali';

    var address = new Address();
    address.address1 = "I - 17/1531";
    address.country = "India";

    this.userModel = new UserModel();
    this.userModel.user = user;
    this.userModel.address = address;
  }

  test(form: NgForm) {
    console.log(form);
  }

}


export class UserModel {
  public user: User;
  public address: Address;
}

export class User {
  firstName: string;
  lastName: string;
}

export class Address {
  address1: string;
  country: string;
}
