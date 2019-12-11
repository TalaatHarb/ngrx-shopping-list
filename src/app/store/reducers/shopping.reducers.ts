import { ShoppingItem } from '../models/shopping-item.model';
import { ShoppingAction, ShoppingActionTypes } from '../actions/shopping.actions';

const initialState: Array<ShoppingItem> = [
    {
        id: '3c69458b-ed09-4549-82d0-2949cb5372ee',
        name: 'Diet Coke'
    }
];


export function ShoppingReducer(state: Array<ShoppingItem> = initialState, action: ShoppingAction) {
    switch (action.type) {
        case ShoppingActionTypes.ADD_ITEM:
            return [...state, action.payload];
        case ShoppingActionTypes.DELETE_ITEM:
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
}
