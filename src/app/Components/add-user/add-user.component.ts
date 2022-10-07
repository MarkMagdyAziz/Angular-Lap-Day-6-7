import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Makers } from 'src/app/Interfaces/makers';
import { UserService } from 'src/app/Services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  
  MakerForm: FormGroup;

  constructor(private userApiService: UserService, private route: Router) { 
    this.MakerForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(3)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      conditions: new FormControl("" , [Validators.requiredTrue])
    })
  }

  ngOnInit(): void {
  }

  get formControl(){
    return this.MakerForm.controls;
  }
  addUserMaker() {
    let newMaker: Makers = {} as Makers
   newMaker.id = Date.now()
   newMaker = this.MakerForm.value
   
    const observer = {
      next: (maker: Makers) => {
        console.log("added")
        this.route.navigateByUrl("/makers")
      },
      error: (err: Error) => { alert(err.message) }
    }
    this.userApiService.addMaker(newMaker).subscribe(observer)
     console.log(newMaker)
  }
}
