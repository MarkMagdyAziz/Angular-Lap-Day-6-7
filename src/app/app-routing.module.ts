import { RegisterFormComponent } from './Components/register-form/register-form.component';
import { UserLogoutComponent } from './Components/user-logout/user-logout.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { MakersComponent } from './Components/makers/makers.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';
import { AddProductComponent } from './Components/add-product/add-product.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './Guards/auth-guard.guard';

const routes: Routes = [
  { path: '', component: RegisterFormComponent },
  {
    path: 'User',
    loadChildren: () =>
      import('src/app/user/user.module').then((m) => m.UserModule),
  },
  { path: 'home', redirectTo: '/' },
  {
    path: 'products/add',
    component: AddProductComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGuardGuard],
  },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'products/update/:id', component: AddProductComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'logout', component: UserLogoutComponent },
  { path: 'makers', component: MakersComponent, canActivate: [AuthGuardGuard] },

  {
    path: 'makers/add',
    component: AddUserComponent,
    canActivate: [AuthGuardGuard],
  },

  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
