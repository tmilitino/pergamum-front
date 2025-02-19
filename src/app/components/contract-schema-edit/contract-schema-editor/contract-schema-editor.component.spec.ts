import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractSchemaEditorComponent } from './contract-schema-editor.component';

describe('ContractSchemaEditorComponent', () => {
  let component: ContractSchemaEditorComponent;
  let fixture: ComponentFixture<ContractSchemaEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractSchemaEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContractSchemaEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
