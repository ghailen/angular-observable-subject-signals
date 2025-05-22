
import { Component } from '@angular/core';
import { SharedSignalService } from './shared-signal.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signal-sender',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <input [(ngModel)]="input" placeholder="Envoyer un message" />
    <button (click)="send()">Émettre</button>
  `
})
export class SenderSignalComponent {
  input = '';

  constructor(private shared: SharedSignalService) {}

  send() {
    if (this.input.trim()) {
      this.shared.sendMessage(this.input);
      this.input = '';
    }
  }
}