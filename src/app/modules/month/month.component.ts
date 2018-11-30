import { Component, OnInit, Input } from '@angular/core';
import { DateUtilService, Day } from 'src/app/service/date-util.service';


@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {

  @Input()
  day: Date;

  list = [{
    name: 'bob',
    team: 'dev',
    outOfOffice: [{
      date: '11/27/2018',
      type: ''
    }, {
      date: '11/2/2018',
      type: ''
    }
    ]
  }, {
    name: 'bob2',
    team: 'dev',
    outOfOffice: [{
      date: '12/27/2018',
      type: ''
    }, {
      date: '12/2/2018',
      type: ''
    }
    ]
  },
  ];

  days: Day[] = [];
  startOfMonth;
  constructor(private dateUtilService: DateUtilService) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.startOfMonth = this.dateUtilService.getStartOfMonth(this.day);
    const daysInMonth = this.dateUtilService.getDaysInMonth(this.day);
    for (let i = 1; i <= daysInMonth; i++) {
      const a = this.dateUtilService.addDaysToDate(this.startOfMonth, i - 1);
      this.days.push( new Day(a.toDate()));
    }
  }

  reset() {
    this.days = [];
    this.day = null;
  }

  isOutOfOffice(day, outOfOfficeDates) {
    for (const oofDate of outOfOfficeDates) {
      const scheduleDate = this.dateUtilService.buildDate(oofDate.date);
      if (scheduleDate.isSame(this.dateUtilService.moment(day.date))) {
        return true;
      }
    }
    return false;
  }

  previewsMonth() {
    const prevMonthFirstDay = this.dateUtilService.getPrevMonthFirstDay(this.day);
    this.reset();
    this.day = prevMonthFirstDay.toDate();
    this.init();
  }

  nextMonth() {
    const nextMonthLastDay = this.dateUtilService.getNextMonthFirstDay(this.day);
    this.reset();
    this.day = nextMonthLastDay.toDate();
    this.init();
  }


}


