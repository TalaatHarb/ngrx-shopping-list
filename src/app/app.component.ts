import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/models/app-state.model';
import { Observable } from 'rxjs';
import { ShoppingItem } from './store/models/shopping-item.model';
import { AddItemAction, DeleteItemAction } from './store/actions/shopping.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-shopping-list';
  shoppingItems: Observable<Array<ShoppingItem>>;
  newShoppingItem: ShoppingItem = { id: '', name: '' };

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.shoppingItems = this.store.select(store => store.shopping);
  }


  addItem() {
    if (this.newShoppingItem.name.length > 0) {
      this.newShoppingItem.id = Math.random() + '';

      this.store.dispatch(new AddItemAction(this.newShoppingItem));

      this.newShoppingItem = { id: '', name: '' };
    }
  }

  deleteItem(id: string) {
    this.store.dispatch(new DeleteItemAction(id));
  }
}
