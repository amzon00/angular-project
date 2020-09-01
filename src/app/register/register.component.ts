import { Component, OnInit } from '@angular/core';
import { IUser } from '../../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  countries = ['USA', 'UK', 'Sweden', 'Denmark', 'Spain'];

  user = new IUser('', '', '', 'default');
  countryHasError = true;

  constructor() {}

  ngOnInit(): void {}

  validateCountry(value) {
    if (value === 'default') {
      this.countryHasError = true;
    } else {
      this.countryHasError = false;
    }
  }

  onSubmit() {
    console.log(this.user);
  }
}
