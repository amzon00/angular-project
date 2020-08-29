import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-elephant-list',
  templateUrl: './elephant-list.component.html',
  styleUrls: ['./elephant-list.component.css'],
})
export class ElephantListComponent implements OnInit {
  _url: string = 'https://elephant-api.herokuapp.com/elephants';
  @Output() public elephantData = new EventEmitter();
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http.get<any>(this._url).subscribe((data) => {
      this.elephantData = data;
    });
  }
}
