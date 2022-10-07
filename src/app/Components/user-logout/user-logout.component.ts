import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent implements OnInit {
  isUserLogged: boolean = false;

  constructor(private authService: AuthService,
  private route: Router) { }

  ngOnInit(): void {
this.authService.statusSubject().subscribe(status => {
      this.isUserLogged = status
    })

        
  }
 
  logout() {
     this.authService.loggout()
     this.isUserLogged = this.authService.isUserLogged
    
    

    this.route.navigateByUrl("/home")
    

  }

}
