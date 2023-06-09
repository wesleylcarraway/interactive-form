import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { CardFormService } from '../shared/services/card-form.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent {
  form!: FormGroup;
  showForm!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private cardFormService: CardFormService,
  ) {
    this.showForm = true;

    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      number: [null, [Validators.required, this.numberValidator]],
      expDateMonth: [null, [Validators.required, this.expDateMonthValidator]],
      expDateYear: [null, [Validators.required, this.expDateYearValidator]],
      cvc: [null, [Validators.required, this.cvcValidator]]
    })
  }

  get name() { return this.form.get('name'); }
  get number() { return this.form.get('number'); }
  get expDateMonth() { return this.form.get('expDateMonth'); }
  get expDateYear() { return this.form.get('expDateYear'); }
  get cvc() { return this.form.get('cvc'); }

  async setCardFormName(input: string):Promise<void> {
      this.cardFormService.setName(input);
  }

  async setCardFormNumber(input: string):Promise<void> {
    this.cardFormService.setNumber(input);
  }

  async setCardFormExpDateMonth(input: string):Promise<void> {
    this.cardFormService.setExpDateMonth(input);
  }

  async setCardFormExpDateYear(input: string):Promise<void> {
    this.cardFormService.setExpDateYear(input);
  }

  async setCardFormCvc(input: string):Promise<void> {
    this.cardFormService.setCvc(input);
  }

  isFormValid(): boolean {
    const valid = this.form.valid;
    if (!valid) {
      this.form.markAllAsTouched();
    }
    return valid;
  }

  numberValidator(control: AbstractControl): ValidationErrors | null {

    const isValid = new RegExp(/^\d{4} \d{4} \d{4} \d{4}$/).test(control.value);
    if (isValid) {
      return null;
    }
    return { numberFormat: { value: control.value } }
  }

  expDateMonthValidator(control: AbstractControl): ValidationErrors | null {
    const isValid = new RegExp(/^\d{2}$/).test(control.value);
    if (isValid && control.value > 0 && control.value <= 12) {
      return null;
    }
    return { expDateMonthFormat: { value: control.value } }
  }

  expDateYearValidator(control: AbstractControl): ValidationErrors | null {
    const isValid = new RegExp(/^\d{2}$/).test(control.value);
    if (isValid) {
      return null;
    }
    return { expDateYearFormat: { value: control.value } }
  }

  cvcValidator(control: AbstractControl): ValidationErrors | null {
    const isValid = new RegExp(/^\d{3}$/).test(control.value);
    if (isValid) {
      return null;
    }
    return { cvcFormat: { value: control.value } }
  }

  confirm(): void {
    if (this.isFormValid()) {
      this.showForm = false;
     }
  }

  reloadPage(): void{
    window.location.reload()
  }
}
