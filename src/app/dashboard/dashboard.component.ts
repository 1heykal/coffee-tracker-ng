import { Component, OnInit } from '@angular/core';
import { Record } from '../record';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  records: Record[] = []
  constructor(private coffeeService: CoffeeService) {

  }

  ngOnInit(): void {
    this.getRecords();
  }

  getRecords() {
    this.coffeeService.getRecords()
      .subscribe(records => this.records = records.sort(r => r.cost).slice(0,5));
  }

}
