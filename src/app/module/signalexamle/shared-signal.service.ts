
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SharedSignalService {
  // ✅ signal qui joue le rôle de BehaviorSubject
  private _currentMessage = signal<string>('Initial');

  // ✅ signal qui garde une liste des messages précédents (comme ReplaySubject)
  private _history = signal<string[]>([]);

  readonly currentMessage = this._currentMessage.asReadonly();
  readonly history = this._history.asReadonly();

  sendMessage(value: string) {
    this._currentMessage.set(value);

    // Ajoute la nouvelle valeur à la liste (max 2, comme ReplaySubject(2))
    const updated = [...this._history(), value].slice(-2);
    this._history.set(updated);
  }
}