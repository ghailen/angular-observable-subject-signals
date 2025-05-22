
import { Component, OnInit } from '@angular/core';
import { SharedDataService } from './shared-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-receiver',
  template: `
    <h4>Valeur reçue (BehaviorSubject) : {{ behavior }}</h4>
    <h4>Valeurs reçues (ReplaySubject) :</h4>
    <ul>
      <li *ngFor="let val of replayValues">{{ val }}</li>
    </ul>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class ReceiverComponent implements OnInit {
  behavior = '';
  replayValues: string[] = [];

  constructor(private shared: SharedDataService) {}

  ngOnInit(): void {
    this.shared.behavior$.subscribe(val => this.behavior = val);
     this.replayValues = []; // reset
    this.shared.replay$.subscribe(val => {
      this.replayValues.push(val);
    });
  }
}
