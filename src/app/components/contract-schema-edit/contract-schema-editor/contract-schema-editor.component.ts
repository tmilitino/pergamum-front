import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MetaSchma } from '../meta_schema';


declare var JSONEditor: any; // Declare a variável global JSONEditor


@Component({
  selector: 'app-contract-schema-editor',
  standalone: true,
  imports: [],
  templateUrl: './contract-schema-editor.component.html',
  styleUrl: './contract-schema-editor.component.scss'
})
export class ContractSchemaEditorComponent implements OnInit,  AfterViewInit {
  private editor: any;

  ngOnInit() {
    // Verifique se o JSON Editor está disponível
    if (typeof JSONEditor !== 'undefined') {
      const schema = new MetaSchma().getSchema()
    
      
      this.editor = new JSONEditor(document.getElementById('json-editor'), {
        schema: schema,
        theme: 'bootstrap4', 
        iconlib: 'fontawesome5',
      });

    } else {
      console.error('JSONEditor não foi carregado corretamente.');
    }
  }

  ngAfterViewInit() {
    // Você pode adicionar lógica adicional aqui, se necessário
  }

  getValue() {
    // Método para obter os valores atuais do editor
    return this.editor?.getValue();
  }

  getCurentDateTime(){

    let date = new Date();
    let month = String(date.getMonth()+1).padStart(2, '0');
    let dayOfMonth = String(date.getDate()).padStart(2, '0');
    let year = date.getFullYear();
    let hour = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');

    let formattedDate = `${year}-${month}-${dayOfMonth} ${hour}:${minutes}:${seconds} `;
    return formattedDate
  }

}
