import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  return: string = '';

  LoginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.LoginForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params) => (this.return = params['return'] || '/products')
    );
  }
  loggin() {
    let userData;
    userData = this.LoginForm.value;

    let username = userData.name;
    let email = userData.email;

    if (username && email) {
      this.authService.login(username, email);
      this.router.navigateByUrl(this.return);
    }
  }
}
