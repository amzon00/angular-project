import { Component, OnInit } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  countries = ['USA', 'UK', 'Sweden', 'Denmark', 'Spain'];

  user = new User('', '', '', 'default');
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
