import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTestComponent } from './user-test/user-test.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from '../Guards/auth-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/User/UserProfile', pathMatch: 'full' },
  {
    path: 'UserProfile',
    component: UserProfileComponent,
    canActivate: [AuthGuardGuard],
  },
  { path: 'UserTest', component: UserTestComponent },
  {
    path: 'UserEdit/:id',
    component: UserEditComponent,
    canActivate: [AuthGuardGuard],
  },
];

@NgModule({
  declarations: [UserTestComponent, UserEditComponent, UserProfileComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UserModule {}
