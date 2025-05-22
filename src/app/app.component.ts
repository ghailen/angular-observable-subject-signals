import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { Observable, of, ReplaySubject, Subject } from 'rxjs';
import { SenderComponent } from './module/sender.component';
import { ReceiverComponent } from './module/receiver.component';
import { ReceiverSignalComponent } from './module/signalexamle/receiver-signal.component';
import { SenderSignalComponent } from './module/signalexamle/sender-signal.component';
import { UserComponent } from './module/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SenderComponent, ReceiverComponent,ReceiverSignalComponent,SenderSignalComponent,UserComponent],
  styleUrl: './app.component.scss',
  template: `
    ====================================Without signals================================================
    <h2>🔄 Test BehaviorSubject vs ReplaySubject</h2>
    <app-sender></app-sender>
    <hr />
    <app-receiver></app-receiver>
    ====================================With signals================================================
   <h2>💡 Version 100% signals (Angular 18)</h2>
    <app-signal-sender></app-signal-sender>
    <hr />
    <app-signal-receiver></app-signal-receiver>

    =================================Example API WITH signal=================
     <h1>🔁 Exemple Signal + HTTP API</h1>
    <app-user></app-user>
  `
})
export class AppComponent {
  title = 'observable-project';

  ngOnInit(): void {
 
    //this.testingObservable();
    //this.testingSubject();

   // this.testingWithoutMulticasting();
   //this.testingReplaySubject();
   this.testingSignal();
  }


  testingObservable(){

    //first way
    const obs = new Observable(observer => {
      observer.next('First way');
      observer.next('Bonjour');
      observer.next('Salut');
      setTimeout(() => observer.next('Encore !'), 1000);
    });
  
    obs.subscribe(value => console.log(value));

    //second way
    const numbers$ = of(1, 2, 3); 
    numbers$.subscribe(value=> console.log("second way :",value))
  
  }

  testingWithoutMulticasting(){
    const obs = new Observable(observer => {
  console.log('Nouvelle exécution');
  observer.next(Math.random());
});

obs.subscribe(val => console.log('A:', val)); // "Nouvelle exécution"
obs.subscribe(val => console.log('B:', val)); // "Nouvelle exécution"
  }

  testingSubject(){
    const subject = new Subject<string>();

    subject.subscribe(val => console.log('A', val));
    subject.subscribe(val => console.log('B', val));
    subject.subscribe(val => console.log('Z', val));

    subject.next('Hello');
  }

  testingReplaySubject(){
    const replay$ = new ReplaySubject<string>(2);
    replay$.next('A');
    replay$.next('B');
    replay$.next('C'); // garde B et C (car max 2)
    replay$.subscribe(value => console.log('Abonné 1 reçoit:', value));
    replay$.next('D');
  }


  testingSignal(){
    const count = signal(0);

count();           // lire la valeur => 0
count.set(5);      // modifier la valeur
count.update(n => n + 1); // incrémenter => 6
console.log(count()) //afficher dans la console


const name = signal('Ghailene');
console.log(name()); // 'Ghailene'

const first = signal('John');
const last = signal('Doe');
const fullName = computed(() => `${first()} ${last()}`); //Crée une valeur dérivée automatiquement mise à jour.
console.log(fullName()) // 


//this must be injected by constructor to be executed
/*effect(() => {
  console.log('Le nom a changé :', name());
});*/
  }
}
