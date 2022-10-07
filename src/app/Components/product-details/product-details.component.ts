import { ApiService } from './../../Services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,RouterModule, Routes } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any 
  productID: number = 0 
  prodID: number = 0

   errMsg: any[] = []
  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private apiService: ApiService, private location: Location
) { 
    
   
  }

  ngOnInit(): void {
   this.prodID = Number(this.activatedRoute.snapshot.paramMap.get("id")) 

    this.apiService.getProductById(this.prodID).subscribe(product => {
      this.product = product
    }, err => {
      this.errMsg.push(err)
    })
  }
  removeProduct() {
    const observer = {
      next: () => {
        console.log("removed succesfully")
       this.location.back()
      },
      error:(err:Error)=>alert(err.message)
    }
    this.apiService.removeProduct(this.prodID).subscribe(observer)

  }
  editProduct() {
     this.router.navigate(["/products/update", this.prodID])
    console.log(this.prodID)
    this.apiService.updateProduct(this.prodID , this.product).subscribe(product => {
      this.product = product
    }, err => {
      this.errMsg.push(err)
    })
  }


}
