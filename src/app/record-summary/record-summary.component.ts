import { Component, Input, OnInit} from '@angular/core';
import { Record } from '../record';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-record-summary',
  templateUrl: './record-summary.component.html',
  styleUrl: './record-summary.component.css'
})
export class RecordSummaryComponent implements OnInit{

  title : string = 'Coffee Tracker';

  records : Record[] = [];

  totalCost : number = 0;

  constructor(private coffeeService: CoffeeService){}

  ngOnInit(): void {
    this.getRecords();
    this.totalCost = this.getTotalCost();
  }

 
  getRecords() : void{
    this.coffeeService.getRecords()
          .subscribe(records => {
            this.records = records;
            this.totalCost = this.getTotalCost();
          });
  }

  getTotalCost() : number{
    let total = 0;

    this.records.forEach(record => {
      total += record.cost; 
    });

    return total;
  }
}
