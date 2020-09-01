import { Component, OnInit, Input } from '@angular/core';
import { IElephant } from '../../../elephant';
import { Router } from '@angular/router';
import { EnrollmentService } from 'src/app/services/enrollment.service';

@Component({
  selector: 'app-elephant-item',
  templateUrl: './elephant-item.component.html',
  styleUrls: ['./elephant-item.component.css'],
})
export class ElephantItemComponent implements OnInit {
  @Input() public elephant: IElephant;
  constructor(
    private router: Router,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {}

  onSelect(elephant: IElephant) {
    this.router.navigate(['/elephants', elephant._id]);
    this.enrollmentService.sendData(elephant);
  }
}
