import { UserService } from './../../Services/user.service';
import { Iproduct } from './../../Interfaces/iproduct';
import {  ApiService} from '../../Services/api.service';
import { Component, OnInit, OnChanges, SimpleChanges ,ElementRef,ViewChild} from '@angular/core';
import { Makers } from 'src/app/Interfaces/makers';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit , OnChanges {


    @ViewChild("catName") catName !: ElementRef  // non null assertion

  
  errMsg: any[] = []
  productsList: Iproduct[] = []
  makers: Makers[] = []
  filteredProducts: Iproduct[] = []
  selectedMakerCat: string = "" 



  constructor(private apiService: ApiService,
  private userService:UserService) { }

  ngOnInit(): void {
    
    this.apiService.getAllProducts().subscribe(products => {
      this.productsList = products
       console.log(this.productsList)
    }, err => {
     this.errMsg.push(err)
    })
    this.userService.getAllCategories().subscribe(cat => {
     this.makers = cat
    }, err => {
      this.errMsg.push(err)
    })   

  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }
  filterCatID() {
    console.log("this", this.selectedMakerCat)
    if (this.selectedMakerCat != '0')
      {
      this.filteredProducts = this.productsList.filter(prod => prod.Maker == this.selectedMakerCat)
    }
    else {
      this.filteredProducts = this.productsList.map((currVal) => {
        return currVal
      })
      }
    
    
  }

  
}
