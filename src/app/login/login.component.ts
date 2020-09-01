import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = new IUser('', '', '', '');

  constructor() {}

  ngOnInit(): void {}
}
