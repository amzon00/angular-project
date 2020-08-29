import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Elephant } from '../../../elephant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elephant-item',
  templateUrl: './elephant-item.component.html',
  styleUrls: ['./elephant-item.component.css'],
})
export class ElephantItemComponent implements OnInit {
  @Input() public elephant: Elephant;
  @Output() public e = new EventEmitter();
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSelect(elephant) {
    this.router.navigate(['/elephants', elephant._id]);
    this.e = elephant;
    console.log(this.e);
  }
}
