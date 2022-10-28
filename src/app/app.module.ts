import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductsComponent } from './Components/products/products.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { MakersComponent } from './Components/makers/makers.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { UserLogoutComponent } from './Components/user-logout/user-logout.component';
import { RegisterFormComponent } from './Components/register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavbarComponent,
    AddProductComponent,
    ProductDetailsComponent,
    NotFoundComponent,
    AddUserComponent,
    MakersComponent,
    UserLoginComponent,
    UserLogoutComponent,
    RegisterFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
