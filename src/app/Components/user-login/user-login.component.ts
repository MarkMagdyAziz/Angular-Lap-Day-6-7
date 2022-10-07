import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  isUserLogged: boolean = false;
  constructor(private authService: AuthService,
   private route: Router) { }

  ngOnInit(): void {
 this.authService.statusSubject().subscribe(status => {
      this.isUserLogged = status
 })
  }
  login() {
    this.authService.login('username', 'password')
    this.isUserLogged = this.authService.isUserLogged
     this.route.navigateByUrl("/logout")
     
  }
 
}
