import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordSummaryComponent } from './record-summary.component';

describe('RecordSummaryComponent', () => {
  let component: RecordSummaryComponent;
  let fixture: ComponentFixture<RecordSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecordSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
