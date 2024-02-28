import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractSchemaEditComponent } from './contract-schema-edit.component';

describe('ContractSchemaEditComponent', () => {
  let component: ContractSchemaEditComponent;
  let fixture: ComponentFixture<ContractSchemaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractSchemaEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContractSchemaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
