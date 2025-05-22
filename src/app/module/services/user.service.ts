
import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);

  // Appel HTTP converti en signal
  readonly users = toSignal(
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users'),
    { initialValue: [] }
  );

  // Exemple de valeur dérivée , ce n'est pas lié à l'api , juste un example de mapping
  readonly userNames = computed(() => this.users().map(u => u.name));
  
}
