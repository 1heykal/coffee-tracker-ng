import { Component } from '@angular/core';
import { CoffeeService } from '../coffee.service';
import { RECORDS } from '../mock-records';
import { ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';


@Component({
  selector: 'app-record-form',
  templateUrl: './record-form.component.html',
  styleUrls: ['./record-form.component.css']
})

export class RecordFormComponent {
  constructor(private coffeeService: CoffeeService, private location: Location, private route: ActivatedRoute){ }

  model = RECORDS[Math.floor(Math.random() * RECORDS.length)]

  submitted = false;

  onSubmit(){
    this.submitted = true;
    this.coffeeService.addRecord(this.model)
      .subscribe();
      this.goBack();
  }

  goBack(){
    this.location.back();
  }

}
