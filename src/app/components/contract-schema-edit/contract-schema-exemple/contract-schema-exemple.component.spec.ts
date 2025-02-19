import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractSchemaExempleComponent } from './contract-schema-exemple.component';

describe('ContractSchemaExempleComponent', () => {
  let component: ContractSchemaExempleComponent;
  let fixture: ComponentFixture<ContractSchemaExempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractSchemaExempleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContractSchemaExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
