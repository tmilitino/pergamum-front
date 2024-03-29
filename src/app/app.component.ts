import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MediaMatcher } from '@angular/cdk/layout';
import { DataTableContractSchemaComponent } from './components/data-table-contract-schema/data-table-contract-schema.component'
import { ContractSchemaEditComponent } from './components/contract-schema-edit/contract-schema-edit.component'
import { MenuContentComponent } from './components/menu-content/menu-content.component'
import { SettingsContentComponent } from './components/settings-content/settings-content.component'
import { HttpClientModule } from '@angular/common/http'
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet, MatToolbarModule,
    MatSidenavModule, MatButtonModule, MatIconModule,
    MatCardModule, DataTableContractSchemaComponent,
    ContractSchemaEditComponent, RouterLink, 
    RouterLinkActive, HttpClientModule, MatDividerModule,
    MenuContentComponent, SettingsContentComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


}