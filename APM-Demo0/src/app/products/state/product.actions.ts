import {createAction, props} from '@ngrx/store';
import {Product} from '../product';

export const toggleProductCode = createAction(
  '[Product] Toggle Product Code'
);
export const setCurrentProduct = createAction(
  '[Product] Set Current Product',
  props<{ product: Product }>()
);
export const clearCurrentProduct = createAction(
  '[Product] Cleaar Current Product'
);
export const initializeCurrentProduct = createAction(
  '[Product] Initialize Current Product'
);
export const loadProducts = createAction(
  '[Product] load'
);
export const loadProductsSuccess = createAction(
  '[Product] load Succes',
  props<{ products: Product[] }>()
);
export const loadProductsFailure = createAction(
  '[Product] load Failed',
  props<{ error: string }>()
);
