import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import { ProductService } from "../services/product.service";
import { DeleteProductActionError, DeleteProductActionSuccess, GetAllProductsAction, GetAllProductsActionError, GetAllProductsActionSuccess, GetSelectedProductsActionError, GetSelectedProductsActionSuccess, ProductsActions, ProductsActionsTypes, SearchProductsActionError, SearchProductsActionSuccess, SelectedProductActionError, SelectedProductActionSuccess } from "./products.actions";

@Injectable()
export class ProductsEffects{
    constructor(private productsService:ProductService,private effectActions:Actions){}
    getAllProductsEffect:Observable<ProductsActions>=createEffect(
        ()=>this.effectActions.pipe(
            ofType(ProductsActionsTypes.GET_ALL_PRODUCTS),
            mergeMap((action:ProductsActions)=>{
                return this.productsService.getProducts().pipe(
                    map((product) => new GetAllProductsActionSuccess(product)),
                    catchError((err)=>of(new GetAllProductsActionError(err.message)))
                    )
            })
        )
    );
    getSelectedProductsEffect:Observable<ProductsActions>=createEffect(
        ()=>this.effectActions.pipe(
            ofType(ProductsActionsTypes.GET_SELECTED_PRODUCTS),
            mergeMap((action:ProductsActions)=>{
                return this.productsService.getSelectedProducts().pipe(
                    map((product) => new GetSelectedProductsActionSuccess(product)),
                    catchError((err)=>of(new GetSelectedProductsActionError(err.message)))
                    )
            })
        )
    );
    /*Search Products Effect */
    searchProductsEffect:Observable<ProductsActions>=createEffect(
        ()=>this.effectActions.pipe(
            ofType(ProductsActionsTypes.SEARCH_PRODUCTS),
            mergeMap((action:ProductsActions)=>{
                return this.productsService.searchProducts(action.payload).pipe(
                    map((product) => new SearchProductsActionSuccess(product)),
                    catchError((err)=>of(new SearchProductsActionError(err.message)))
                    )
            })
        )
    );
    /*Select Product Effect */
    selectProductEffect:Observable<ProductsActions>=createEffect(
        ()=>this.effectActions.pipe(
            ofType(ProductsActionsTypes.SELECT_PRODUCT),
            mergeMap((action:ProductsActions)=>{
                return this.productsService.setSelected(action.payload).pipe(
                    map((product) => new SelectedProductActionSuccess(product)),
                    catchError((err)=>of(new SelectedProductActionError(err.message)))
                    )
            })
        )
    );
    /*Delete Product Effect */
    deleteProductEffect:Observable<ProductsActions>=createEffect(
        ()=>this.effectActions.pipe(
            ofType(ProductsActionsTypes.DELETE_PRODUCT),
            mergeMap((action:ProductsActions)=>{
                return this.productsService.delete(action.payload.id).pipe(
                    map(() => new DeleteProductActionSuccess(action.payload)),
                    catchError((err)=>of(new DeleteProductActionError(err.message)))
                    )
            })
        )
    );
}
