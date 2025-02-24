import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MetaSchma } from './meta_schema';
import { ContractDetails } from './contract-details'

import { MatGridListModule } from '@angular/material/grid-list';

import { ContractSchemaFormComponent } from "./contract-schema-form/contract-schema-form.component";
import { ContractSchemaExempleComponent } from "./contract-schema-exemple/contract-schema-exemple.component";
import { ContractSchemaEditorComponent } from "./contract-schema-editor/contract-schema-editor.component";


@Component({
  selector: 'app-contract-schema-edit',
  standalone: true,
  imports: [ReactiveFormsModule, ContractSchemaFormComponent, ContractSchemaExempleComponent, ContractSchemaEditorComponent, MatGridListModule],
  templateUrl: './contract-schema-edit.component.html',
  styleUrl: './contract-schema-edit.component.scss'
})
export class ContractSchemaEditComponent {


}
