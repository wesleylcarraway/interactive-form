import { Component } from '@angular/core';
import { CardFormService } from '../shared/services/card-form.service';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.css']
})
export class CardDisplayComponent {
  selectedName!: any;
  selectedNumber!: any;
  selectedExpDateMonth!: any;
  selectedExpDateYear!: any;
  selectedCvc!: any;

  constructor(private cardFormService: CardFormService) {}

  ngOnInit(): void {

    this.cardFormService.selectedName$.subscribe((value) => {
      this.selectedName = value;
    });

    this.cardFormService.selectedNumber$.subscribe((value) => {
      this.selectedNumber = value;
    });

    this.cardFormService.selectedExpDateMonth$.subscribe((value) => {
      this.selectedExpDateMonth = value;
    });

    this.cardFormService.selectedExpDateYear$.subscribe((value) => {
      this.selectedExpDateYear = value;
    });

    this.cardFormService.selectedCvc$.subscribe((value) => {
      this.selectedCvc = value;
    });

    this.selectedName = "JANE APPLESEED";
    this.selectedNumber = "0000 0000 0000 0000";
    this.selectedExpDateMonth = "00";
    this.selectedExpDateYear = "00";
    this.selectedCvc = "000";
  }
}
