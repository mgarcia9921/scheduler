import { Component, OnInit } from '@angular/core';
import { DateUtilService, Day } from 'src/app/service/date-util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  day: Day;

  title = 'Angular';

  constructor(private dateUtilService: DateUtilService) {
  }

  ngOnInit() {
    this.day = this.dateUtilService.getCurrentDate();
  }
}
