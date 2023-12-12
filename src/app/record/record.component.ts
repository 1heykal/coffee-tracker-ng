import { Component, Input, OnInit } from '@angular/core';
import { Record } from '../record';
import { ActivatedRoute } from '@angular/router';
import { CoffeeService } from '../coffee.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit{

  record: Record | undefined;

  constructor(private route: ActivatedRoute,
    private coffeeService: CoffeeService,
    private location: Location) {

  }
  ngOnInit(): void {
    this.getRecord();
  }

  getRecord(){
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.coffeeService.getRecord(id)
    .subscribe(record => this.record = record);
  }

  goBack() : void{
    this.location.back();
  }

  save() : void{
    this.coffeeService.updateRecord(this.record)
      .subscribe(() => this.goBack());
  }



}

