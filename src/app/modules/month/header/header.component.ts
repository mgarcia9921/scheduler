import { Component, Input, TemplateRef, ChangeDetectorRef, ChangeDetectionStrategy, DoCheck } from '@angular/core';

import { DateUtilService } from 'src/app/service/date-util.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements DoCheck {

  @Input()
  day: Date;

  @Input()
  customTemplate: TemplateRef<any>;

  days: number[] = [];

  constructor(private cdr: ChangeDetectorRef, private dateUtilService: DateUtilService) {

  }

  ngDoCheck() {
    this.reset();
    this.init();
  }

  reset() {
    this.days = [];
  }

  init() {
    const daysInMonth = this.dateUtilService.getDaysInMonth(this.day);
    for (let i = 1; i <= daysInMonth; i++) {
      this.days.push(i);
    }
  }
}
