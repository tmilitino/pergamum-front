import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { ContractSchema } from './../../interfaces/contract-schema';
import { ContractSchemaService } from '../../service/contract-schema.service'
import { Location } from '@angular/common';


@Component({
  selector: 'app-data-table-contract-schema',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './data-table-contract-schema.component.html',
  styleUrls: ['./data-table-contract-schema.component.scss']
})
export class DataTableContractSchemaComponent implements OnInit {
  contractSchema: ContractSchema[] = [];
  displayedColumns: string[] = ['id', 'name', 'schema_version', 'create_at', 'update_at', ];
  
  constructor(
    private route: ActivatedRoute,
    private contractSchemaService: ContractSchemaService,
    private location: Location
    ) {}
    
    ngOnInit(): void {
      this.getContractSchemas();
  }

  getContractSchemas(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id1')!, 10);
    this.contractSchemaService.getContractSchemas()
      .subscribe(contractSchemas => this.contractSchema = contractSchemas);
      console.log(this.contractSchema)
  }
}
