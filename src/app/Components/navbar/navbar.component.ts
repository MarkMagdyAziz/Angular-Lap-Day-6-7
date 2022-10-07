import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isUserLogged: boolean = false;
  constructor(
    private authUser:AuthService
  ) { }

  ngOnInit(): void {
    // this.isUserLogged = this.authUser.isUserLogged
    this.authUser.statusSubject().subscribe(status => {
      this.isUserLogged = status
    })
  }

}
