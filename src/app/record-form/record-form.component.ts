import { Component } from '@angular/core';
import { RecordFormModel } from '../record-form-model';
import { CoffeeService } from '../coffee.service';
import { Record } from '../record';

@Component({
  selector: 'app-record-form',
  templateUrl: './record-form.component.html',
  styleUrls: ['./record-form.component.css']
})

export class RecordFormComponent {
  constructor(private coffeeService: CoffeeService){   
  }
  model = new RecordFormModel('Coffee', 'Morning Brew', 'Single', '2023-04-10T13:30:00')

  submitted = false;

  onSubmit(){

    this.submitted = true;

    this.coffeeService.addRecord(this.model)
      .subscribe();
  }

}
