import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractSchemaFormComponent } from './contract-schema-form.component';

describe('ContractSchemaFormComponent', () => {
  let component: ContractSchemaFormComponent;
  let fixture: ComponentFixture<ContractSchemaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractSchemaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContractSchemaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
