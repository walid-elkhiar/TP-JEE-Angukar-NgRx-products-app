import { Action } from "@ngrx/store";
import { Product } from "../model/products.model";

export enum ProductsActionsTypes{
    /**
 * Get All Products
 */
    GET_ALL_PRODUCTS="[Products] Get All Products",
    GET_ALL_PRODUCTS_SUCCESS="[Products] Get All Products Success",
    GET_ALL_PRODUCTS_ERROR="[Products] Get All Products Error",
/**
 * Get Selected Products
 */
    GET_SELECTED_PRODUCTS="[Products] Get SELECTED Products",
    GET_SELECTED_PRODUCTS_SUCCESS="[Products] Get SELECTED Products Success",
    GET_SELECTED_PRODUCTS_ERROR="[Products] Get SELECTED Products Error",
    /**
 * Get Selected Products
 */
     SEARCH_PRODUCTS="[Products] SEARCH Products",
     SEARCH_PRODUCTS_SUCCESS="[Products] SEARCH Products Success",
     SEARCH_PRODUCTS_ERROR="[Products] SEARCH Products Error",
     /**
 * SELECT_PRODUCT
 */
      SELECT_PRODUCT="[Product] Select Product",
      SELECT_PRODUCT_SUCCESS="[Product] Select Product Success",
      SELECT_PRODUCT_ERROR="[Product] Select Product Error",
      /**
 * DELETE_PRODUCT
 */
       DELETE_PRODUCT="[Product] DELETE Product",
       DELETE_PRODUCT_SUCCESS="[Product] DELETE Product Success",
       DELETE_PRODUCT_ERROR="[Product] DELETE Product Error",

}
export class GetAllProductsAction implements Action{
    type: ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS;
    constructor(public payload:any){}

}
export class GetAllProductsActionSuccess implements Action{
    type: ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS;
    constructor(public payload:Product[]){}
}
export class GetAllProductsActionError implements Action{
    type: ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR;
    constructor(public payload:string){}
}

export class GetSelectedProductsAction implements Action{
    type: ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS;
    constructor(public payload:any){}

}
export class GetSelectedProductsActionSuccess implements Action{
    type: ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS;
    constructor(public payload:Product[]){}
}
export class GetSelectedProductsActionError implements Action{
    type: ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR;
    constructor(public payload:string){}
}
export class SearchProductsAction implements Action{
    type: ProductsActionsTypes=ProductsActionsTypes.SEARCH_PRODUCTS;
    constructor(public payload:string){}

}
export class SearchProductsActionSuccess implements Action{
    type: ProductsActionsTypes=ProductsActionsTypes.SEARCH_PRODUCTS_SUCCESS;
    constructor(public payload:Product[]){}
}
export class SearchProductsActionError implements Action{
    type: ProductsActionsTypes=ProductsActionsTypes.SEARCH_PRODUCTS_ERROR;
    constructor(public payload:string){}
}
export class SelectedProductAction implements Action{
    type: ProductsActionsTypes=ProductsActionsTypes.SELECT_PRODUCT;
    constructor(public payload:Product){}

}
export class SelectedProductActionSuccess implements Action{
    type: ProductsActionsTypes=ProductsActionsTypes.SELECT_PRODUCT_SUCCESS;
    constructor(public payload:Product){}
}
export class SelectedProductActionError implements Action{
    type: ProductsActionsTypes=ProductsActionsTypes.SELECT_PRODUCT_ERROR;
    constructor(public payload:string){}
}
export class DeleteProductAction implements Action{
    type: ProductsActionsTypes=ProductsActionsTypes.DELETE_PRODUCT;
    constructor(public payload:Product){}

}
export class DeleteProductActionSuccess implements Action{
    type: ProductsActionsTypes=ProductsActionsTypes.DELETE_PRODUCT_SUCCESS;
    constructor(public payload:Product){}
}
export class DeleteProductActionError implements Action{
    type: ProductsActionsTypes=ProductsActionsTypes.DELETE_PRODUCT_ERROR;
    constructor(public payload:string){}
}
export type ProductsActions=GetAllProductsAction|GetAllProductsActionSuccess|GetAllProductsActionError|
GetSelectedProductsAction|GetSelectedProductsActionSuccess|GetSelectedProductsActionError|
SearchProductsAction|SearchProductsActionSuccess|SearchProductsActionError|
SelectedProductAction|SelectedProductActionSuccess|SelectedProductActionError|
DeleteProductAction|DeleteProductActionSuccess|DeleteProductActionError;