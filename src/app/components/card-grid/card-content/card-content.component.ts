import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Contract } from './contract';

@Component({
  selector: 'app-card-content',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card-content.component.html',
  styleUrl: './card-content.component.scss'
})
export class CardContentComponent {

  @Input() contract1!: Contract;

}
