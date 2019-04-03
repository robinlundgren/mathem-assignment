import { Component, OnInit } from '@angular/core';
import { TimeService } from './service/app-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private timeService: TimeService) {}

  filter = {
    true: true
  };
  status = false;
  condition = false;

  public delTimes: Array < [] > = [];

  ngOnInit() {
    this.timeService.getTimes().subscribe((data: any) => {
      return this.delTimes = data.deliveryTimes.filter(deliveryTimes =>
        (deliveryTimes.inHomeAvailable === 'true' && this.filter.true));
    });

  }

  filterChange(e) {
    if (e) {
      this.timeService.getTimes().subscribe((data: any) => {
        return this.delTimes = data.deliveryTimes.filter(deliveryTimes =>
          (deliveryTimes.inHomeAvailable === 'true' && this.filter.true));
      });
    } else {
      this.timeService.getTimes().subscribe((data: any) => {
        return this.delTimes = data.deliveryTimes;
      });
    }
  }

  clickEvent() {
    this.status = true;
  }

  clickEvent2() {
    this.status = false;
  }
}

