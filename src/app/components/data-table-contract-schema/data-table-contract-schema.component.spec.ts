import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableContractSchemaComponent } from './data-table-contract-schema.component';

describe('DataTableContractSchemaComponent', () => {
  let component: DataTableContractSchemaComponent;
  let fixture: ComponentFixture<DataTableContractSchemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataTableContractSchemaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataTableContractSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
