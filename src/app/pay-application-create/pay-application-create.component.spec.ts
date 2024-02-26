import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayApplicationCreateComponent } from './pay-application-create.component';

describe('PayApplicationCreateComponent', () => {
  let component: PayApplicationCreateComponent;
  let fixture: ComponentFixture<PayApplicationCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayApplicationCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PayApplicationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
