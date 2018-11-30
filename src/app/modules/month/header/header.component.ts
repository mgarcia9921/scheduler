import { Component, Input, TemplateRef, ChangeDetectorRef, ChangeDetectionStrategy, DoCheck } from '@angular/core';

import { DateUtilService, Day } from 'src/app/service/date-util.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements DoCheck {

  @Input()
  day: Day;

  @Input()
  customTemplate: TemplateRef<any>;

  days: Day[] = [];

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
    this.days = this.dateUtilService.buildMonthDays(this.day.date);
  }
}
