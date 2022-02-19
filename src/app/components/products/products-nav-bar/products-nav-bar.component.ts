import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Store} from '@ngrx/store';
import {GetAllProductsAction, GetSelectedProductsAction, SearchProductsAction} from '../../../ngrx/products.actions';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  constructor(private store:Store<any>,private router:Router) { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
    this.store.dispatch(new GetAllProductsAction({}))
  }

  onGetSelectedProducts() {
    this.store.dispatch(new GetSelectedProductsAction({}))
  }
  onSearch(dataForm:any){
    this.store.dispatch(new SearchProductsAction(dataForm.keyword)); 
  }
  onNewProduct(){
    this.router.navigateByUrl("/newProduct");
  }
}
