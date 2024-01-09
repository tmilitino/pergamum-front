import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractSchemaComponent } from './contract-schema.component';

describe('ContractSchemaComponent', () => {
  let component: ContractSchemaComponent;
  let fixture: ComponentFixture<ContractSchemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractSchemaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContractSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
