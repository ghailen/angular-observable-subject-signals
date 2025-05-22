
import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SharedDataService {
  // 🔵 BehaviorSubject avec valeur initiale
  private behavior = new BehaviorSubject<string>('Initial');

  // 🔴 ReplaySubject qui mémorise les 2 dernières valeurs
  private replay = new ReplaySubject<string>(5);

  // Observables à exposer
  behavior$ = this.behavior.asObservable();
  replay$ = this.replay.asObservable();

  send(value: string) {
    console.log('Émission :', value);
    this.behavior.next(value);
    this.replay.next(value);
  }
}