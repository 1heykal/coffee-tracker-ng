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

  record!: Record ;

   id = Number(this.route.snapshot.paramMap.get('id'))

  constructor(private route: ActivatedRoute,
    private coffeeService: CoffeeService,
    private location: Location) {

  }
  ngOnInit(): void {
    this.getRecord();
  }

  getRecord(){
    
    this.coffeeService.getRecord(this.id)
    .subscribe(record => this.record = record);
  }

  goBack() : void{
    this.location.back();
  }

  save() : void{
    this.coffeeService.updateRecord(this.record)
      .subscribe(() => this.goBack());
  }

  delete(): void {
    this.coffeeService.deleteRecord(this.id)
    .subscribe(() => this.goBack());
  }



}

