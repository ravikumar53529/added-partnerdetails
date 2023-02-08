import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersDetailsComponent } from './partners-details.component';

describe('PartnersDetailsComponent', () => {
  let component: PartnersDetailsComponent;
  let fixture: ComponentFixture<PartnersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnersDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
