import { Router } from '@angular/router';
import { Makers } from './../../Interfaces/makers';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-makers',
  templateUrl: './makers.component.html',
  styleUrls: ['./makers.component.css'],
})
export class MakersComponent implements OnInit {
  makers: Makers[] = [];
  newMaker = {} as Makers;
  makerID: number = 0;
  constructor(private makersApiService: UserService, private router: Router) {
    this.getMakers();
  }

  ngOnInit(): void {}

  getMakers() {
    const observer = {
      next: (makers: Makers[]) => {
        this.makers = makers;
        console.log('GetAllMakersUsers succesfully');
      },
      error: (err: Error) => alert(err.message),
    };
    this.makersApiService.getAllCategories().subscribe(observer);
  }
  //    this.authService.statusSubject().subscribe(status => {
  //       this.isUserLogged = status
  //  })

  deleteUser(id: number) {
    const observer = {
      next: () => {
        console.log('removed succesfully');
        // this.makers = this.makers.filter(item => item.id != id);
        this.getMakers();
      },
      error: (err: Error) => alert(err.message),
    };
    this.makersApiService.removeMaker(id).subscribe(observer);
  }
  editUser(id: number) {
    console.log(this.newMaker);
    this.router.navigate(['/User/UserEdit', id]);
    console.log(id);
  }
}
