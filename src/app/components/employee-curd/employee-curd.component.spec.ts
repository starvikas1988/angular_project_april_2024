import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCurdComponent } from './employee-curd.component';

describe('EmployeeCurdComponent', () => {
  let component: EmployeeCurdComponent;
  let fixture: ComponentFixture<EmployeeCurdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeCurdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeCurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
