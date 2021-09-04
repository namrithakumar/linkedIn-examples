import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRandomQuoteComponent } from './view-random-quote.component';

describe('ViewRandomQuoteComponent', () => {
  let component: ViewRandomQuoteComponent;
  let fixture: ComponentFixture<ViewRandomQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRandomQuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRandomQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
