
import { Component, computed, inject } from '@angular/core';
import { SharedSignalService } from './shared-signal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signal-receiver',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h4>Message courant : {{ current() }}</h4>
    <h4>Historique (comme ReplaySubject(2)) :</h4>
    <ul>
      <li *ngFor="let msg of history()">{{ msg }}</li>
    </ul>
  `
})
export class ReceiverSignalComponent {
  private shared = inject(SharedSignalService);

  current = computed(() => this.shared.currentMessage());
  history = computed(() => this.shared.history());
}