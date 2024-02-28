import { RouterModule, Routes } from '@angular/router';
import { ContractSchemaEditComponent } from './components/contract-schema-edit/contract-schema-edit.component'
import { SettingsContentComponent } from './components/settings-content/settings-content.component'
import { DataTableContractSchemaComponent } from './components/data-table-contract-schema/data-table-contract-schema.component'
import { NgModule }             from '@angular/core';



export const appRoutes: Routes = [
    {path: 'contract-schema-edit', component: ContractSchemaEditComponent},
    {path: 'home', title:"Data Contract Schema", component: DataTableContractSchemaComponent},
    {path: 'settings', component: SettingsContentComponent}

];


// @NgModule({
//     imports: [
//       RouterModule.forChild(routes)
//     ],
//     exports: [
//       RouterModule
//     ]
//   })
//   export class AppRoutingModule { }
  