import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardContentComponent } from './card-content/card-content.component'
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-card-grid',
  standalone: true,
  imports: [MatCardModule, MatGridListModule, CardContentComponent, CommonModule],
  templateUrl: './card-grid.component.html',
  styleUrl: './card-grid.component.scss'
})
export class CardGridComponent {
  objectContract = [
    {
      name: "teste"
    },
    {
      name: "teste1"
    },
    {
      name: "teste2"
    }
  ]
}
