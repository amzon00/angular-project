import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Elephant } from '../../../elephant';

@Component({
  selector: 'app-elephant-details',
  templateUrl: './elephant-details.component.html',
  styleUrls: ['./elephant-details.component.css'],
})
export class ElephantDetailsComponent implements OnInit {
  @Input() elephant: Elephant;
  public elephantId;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.elephantId = id;
    });
    console.log(this.elephant);
  }
}
