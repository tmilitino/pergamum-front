import { Component } from '@angular/core';
import { JsonFormComponent } from '../json-form/json-form.component';

@Component({
  selector: 'app-contract-schema-edit',
  standalone: true,
  imports: [JsonFormComponent],
  templateUrl: './contract-schema-edit.component.html',
  styleUrl: './contract-schema-edit.component.scss'
})
export class ContractSchemaEditComponent {

}
