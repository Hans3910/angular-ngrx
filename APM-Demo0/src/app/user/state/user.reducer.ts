import {createAction, createReducer, on} from '@ngrx/store';

export const userReducer = createReducer(
  {maskUserName: true},
  on(createAction('[User] mask username'), state => {
    return {
      ...state,
      maskUserName: !state.maskUserName
    };
  })
);