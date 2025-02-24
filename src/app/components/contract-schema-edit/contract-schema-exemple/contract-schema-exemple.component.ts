import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { NgxJsonViewerModule, NgxJsonViewerComponent } from 'ngx-json-viewer';



@Component({
  selector: 'app-contract-schema-exemple',
  standalone: true,
  imports: [ MatCardModule, NgxJsonViewerModule],
  templateUrl: './contract-schema-exemple.component.html',
  styleUrl: './contract-schema-exemple.component.scss'
})
export class ContractSchemaExempleComponent {

  data = {
    "simple key": "simple value",
    "numbers": 1234567,
    "simple list": [
      "value1",
      22222,
      "value3"
    ],
    "owner": null,
    "simple obect": {
      "simple key": "simple value",
      "numbers": 1234567,
      "simple list": [
        "value1",
        22222,
        "value3"
      ],
      "simple obect": {
        "key1": {
          "value1": {
            "ww": "WWW"
          }
        },
        "key2": 22222,
        "key3": "value3"
      }
    }


  }
  


  // this.data = JSON.parse(data);
 


}
