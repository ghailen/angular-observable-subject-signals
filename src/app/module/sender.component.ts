
import { Component } from '@angular/core';
import { SharedDataService } from './shared-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sender',
  template: `
    <input [(ngModel)]="input" placeholder="Envoyer une valeur" />
    <button (click)="send()">Émettre</button>
  `,
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class SenderComponent {
  input = '';

  constructor(private shared: SharedDataService) {}

  send() {
    this.shared.send(this.input);
    this.input = '';
  }
}
