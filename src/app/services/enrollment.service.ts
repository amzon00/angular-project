import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentService {
  private _elephantDataSource = new BehaviorSubject<any>(null);
  elephantData$ = this._elephantDataSource.asObservable();

  sendData(data) {
    this._elephantDataSource.next(data);
  }
}
