import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Record } from '../record';
import { CoffeeService } from '../coffee.service';
import { MessageService } from '../message.service';
import { Observable, Subject, debounceTime, tap, switchMap, distinctUntilChanged} from 'rxjs';


@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit{

  public records : Record[] = [];

  searchRecords : Record[] = [];

  records$ !: Observable<Record[]>;
  private searchTerms = new Subject<string>();

  constructor(private coffeeService: CoffeeService, private messageService: MessageService){}

  ngOnInit(): void {
    this.getRecords();

    this.records$ = this.searchTerms.pipe(

      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
    
      // ignore new term if same as previous term
      distinctUntilChanged(),
    
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.coffeeService.searchRecords(term)),
    
      tap(records => this.searchRecords = records)
    );
    
    this.records$.subscribe();
  }
 
  getRecords() : void{
    this.coffeeService.getRecords()
          .subscribe(records => this.records = records);
  }

  // push a search term into the observable stream
  search(term: string) : void {
    this.searchTerms.next(term);
  }
  

}

