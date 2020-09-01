import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IElephant } from '../../../elephant';
import { EnrollmentService } from '../../services/enrollment.service';

@Component({
  selector: 'app-elephant-details',
  templateUrl: './elephant-details.component.html',
  styleUrls: ['./elephant-details.component.css'],
})
export class ElephantDetailsComponent implements OnInit {
  public elephantId;
  elephant;

  constructor(
    private route: ActivatedRoute,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.elephantId = id;

      this.enrollmentService.elephantData$.subscribe((d) => {
        console.log(d);
        this.elephant = d;
      });
    });
  }
}
