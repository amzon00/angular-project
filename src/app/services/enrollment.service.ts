import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Elephant } from '../../elephant';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentService {
  private _elephantDataSource = new Subject<any>();
  elephantData$ = this._elephantDataSource.asObservable();

  sendData(data) {
    this._elephantDataSource.next(data);
  }
}
