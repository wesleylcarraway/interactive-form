import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardFormService {
  private name$ = new BehaviorSubject<any>({});
  selectedName$ = this.name$.asObservable();

  private number$ = new BehaviorSubject<any>({});
  selectedNumber$ = this.number$.asObservable();

  private expDateMonth$ = new BehaviorSubject<any>({});
  selectedExpDateMonth$ = this.expDateMonth$.asObservable();

  private expDateYear$ = new BehaviorSubject<any>({});
  selectedExpDateYear$ = this.expDateYear$.asObservable();

  private cvc$ = new BehaviorSubject<any>({});
  selectedCvc$ = this.cvc$.asObservable();

  constructor() { }

  setName(name: any) {
    this.name$.next(name);
  }

  setNumber(number: any) {
    this.number$.next(number);
  }

  setExpDateMonth(expDateMonth: any) {
    this.expDateMonth$.next(expDateMonth);
  }

  setExpDateYear(expDateYear: any) {
    this.expDateYear$.next(expDateYear);
  }

  setCvc(cvc: any) {
    this.cvc$.next(cvc);
  }
}
