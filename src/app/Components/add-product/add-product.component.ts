import { UserService } from './../../Services/user.service';
import { Makers } from './../../Interfaces/makers';
import { Iproduct } from './../../Interfaces/iproduct';
import { ApiService } from './../../Services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private route: Router,
    private userApi: UserService
  ) {}

  newProduct: Iproduct = {} as Iproduct;
  makers: Makers[] = [];
  ngOnInit(): void {
    this.getMakers();
  }
  addNewProduct() {
    let id = Date.now();
    this.newProduct.id = `${id}`;
    const observer = {
      next: (prod: Iproduct) => {
        console.log('Added');
        this.route.navigateByUrl('/products');
      },
      error: (err: Error) => {
        alert(err.message);
      },
    };
    this.apiService.addProduct(this.newProduct).subscribe(observer);
    console.log(this.newProduct);
  }
  getMakers() {
    return this.userApi.getAllCategories().subscribe(
      (makers) => {
        console.log(makers);
        this.makers = makers;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
