import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'observable-project';

  ngOnInit(): void {
 
    //this.testingObservable();
    this.testingSubject();
  }


  testingObservable(){
    const obs = new Observable(observer => {
      observer.next('Bonjour');
      observer.next('Salut');
      setTimeout(() => observer.next('Encore !'), 1000);
    });
  
    obs.subscribe(value => console.log(value));
  
  }


  testingSubject(){
    const subject = new Subject<string>();

    subject.subscribe(val => console.log('A', val));
    subject.subscribe(val => console.log('B', val));
    subject.subscribe(val => console.log('Z', val));

    subject.next('Hello');
  }


}
