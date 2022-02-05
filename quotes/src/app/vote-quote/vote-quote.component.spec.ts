import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteQuoteComponent } from './vote-quote.component';

describe('VoteQuoteComponent', () => {
  let component: VoteQuoteComponent;
  let fixture: ComponentFixture<VoteQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteQuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
