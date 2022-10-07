import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  isUserLoggedSubject: BehaviorSubject<boolean>

  constructor() { 
    this.isUserLoggedSubject = new BehaviorSubject<boolean> (this.isUserLogged)
  }
  login(userName:string,password:string) {
    // call login API, and get Access Token
    let userToken = '2222222222222'
    localStorage.setItem('token', userToken)
    this.isUserLoggedSubject.next(true)
  }
  loggout() { 
    localStorage.removeItem('token')
    this.isUserLoggedSubject.next(false)
  }
  get isUserLogged():boolean {
    return (localStorage.getItem('token')) ? true : false
  }
  statusSubject():Observable<boolean> {
    return this.isUserLoggedSubject.asObservable()
  }
}
