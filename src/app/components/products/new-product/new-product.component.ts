import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { State } from '@ngrx/store';
import { ProductsState, ProductsStateEnum } from 'src/app/ngrx/products.reducer';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  productFormGroup:FormGroup|null=null;
  state:ProductsState|null=null;
  readonly productsStateEnum=ProductsStateEnum;
  submitted:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  newProduct(){}
  onSaveProduct(){}
  

}
