import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private Filter = new BehaviorSubject('');

  currentFilter = this.Filter.asObservable();
  private isLogged = new BehaviorSubject('');

  currentIsLogged = this.isLogged.asObservable();
  private isAdmin = new BehaviorSubject('');

  currentIsAdmin = this.isAdmin.asObservable();
  private loggedUsedId = new BehaviorSubject('');

  currentLoggedUser = this.loggedUsedId.asObservable();
  private selectedEventId = new BehaviorSubject('');

  currentSelectedEvent= this.selectedEventId.asObservable();

  changeFilter(filter:string) {
    this.Filter.next(filter);

  }
  changeLogged(filter:string) {
    this.isLogged.next(filter);

  }
  changeAdmin(filter:string) {
    this.isAdmin.next(filter);

  }
  changeLoggedUser(filter:string) {
    this.loggedUsedId.next(filter);

  }
  changeSelectedEvent(filter:string) {
    this.selectedEventId.next(filter);

  }
}
