import { Component, OnInit } from '@angular/core';
import * as moment from 'jalali-moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'banner';
  currentTime: Date;

  constructor() {
    this.currentTime = new Date();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }
  getcurrentMonth() {
    const jalaliDate = moment().locale('fa').format('jMMM');
    return jalaliDate;
  }
  getcurrentDate() {
    const jalaliDate = moment().locale('fa').format('jD');
    return jalaliDate;
  }
}
