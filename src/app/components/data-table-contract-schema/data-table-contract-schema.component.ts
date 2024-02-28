import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { ContractSchema } from './../../interfaces/contract-schema';
import { ContractSchemaService } from '../../service/contract-schema.service'
import { Location } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';  
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-data-table-contract-schema',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatDividerModule, MatIconModule, MatSlideToggleModule, RouterLink,
    RouterOutlet],
  templateUrl: './data-table-contract-schema.component.html',
  styleUrls: ['./data-table-contract-schema.component.scss']
})
export class DataTableContractSchemaComponent implements OnInit {
  contractSchema: ContractSchema[] = [];
  displayedColumns: string[] = ['id', 'name', 'schema_version', 'create_at', 'update_at', 'actions'];
  
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
  }
}
