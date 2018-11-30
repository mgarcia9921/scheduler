import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateUtilService {

  getCurrentDate() {
    const now =  moment();
    return new Day(now.toDate());
  }

  moment(date: Date) {
    return moment(date);
  }

  getStartOfMonth(date: Date) {
    return moment(date).startOf('month');
  }

  getDaysInMonth(date: Date) {
    return moment(date).daysInMonth();
  }

  getPrevMonthFirstDay(date: Date) {
    return moment(date).subtract(1, 'months').startOf('month');
  }

  getNextMonthFirstDay(date: Date) {
    return moment(date).add(1, 'months').endOf('month');
  }

  /** builds a date object for a format MM/DD/YYYY*/
  buildDate(date) {
    return moment(date, 'MM/DD/YYYY');
  }

  /** builds a date object for a format MM/DD/YYYY*/
  addDaysToDate(date, addDays) {
    return moment(date, 'MM/DD/YYYY').add(addDays, 'days');
  }

  isWeekend(date: Date) {
    return (date.getDay() === 6 || date.getDay() === 7);
  }

  buildMonthDays(date: Date) {
    const startOfMonth = this.getStartOfMonth(date);
    const daysInMonth = this.getDaysInMonth(date);
    const days: Day[] = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const a = this.addDaysToDate(startOfMonth, i - 1);
      days.push( new Day(a.toDate()));
    }
    return days;
  }



}

export class Day {
  date: Date;

  constructor(date: Date) {
    this.date = date;
  }

  isWeekend() {
    return (this.date.getDay() === 6 || this.date.getDay() === 0);
  }
}
