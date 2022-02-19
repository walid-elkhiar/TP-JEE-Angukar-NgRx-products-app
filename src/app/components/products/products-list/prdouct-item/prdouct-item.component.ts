import {Component, Input, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { DeleteProductAction, SelectedProductAction } from 'src/app/ngrx/products.actions';
import {Product} from '../../../../model/products.model';

@Component({
  selector: 'app-prdouct-item',
  templateUrl: './prdouct-item.component.html',
  styleUrls: ['./prdouct-item.component.css']
})
export class PrdouctItemComponent implements OnInit {
    @Input() product:Product|null=null;
  constructor(private store:Store) { }

  ngOnInit(): void {
  }
  onSelect(product:Product){
    this.store.dispatch(new SelectedProductAction(product));
  }
  onDelete(product:Product){
    this.store.dispatch(new DeleteProductAction(product));
  }

}
