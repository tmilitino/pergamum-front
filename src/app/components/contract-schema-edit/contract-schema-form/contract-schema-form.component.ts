import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {ContractDetails} from '../contract-details'



@Component({
  selector: 'app-contract-schema-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contract-schema-form.component.html',
  styleUrl: './contract-schema-form.component.scss'
})
export class ContractSchemaFormComponent {

}
