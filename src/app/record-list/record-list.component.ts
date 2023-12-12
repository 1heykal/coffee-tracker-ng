import { Component, OnInit } from '@angular/core';
import { Record } from '../record';
import { CoffeeService } from '../coffee.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit{

  records : Record[] = [];

  constructor(private coffeeService: CoffeeService, private messageService: MessageService){}

  ngOnInit(): void {
    this.getRecords();
  }

 
  getRecords() : void{
    this.coffeeService.getRecords()
          .subscribe(records => this.records = records);
  }

}
