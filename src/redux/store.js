import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from '@reduxjs/toolkit';
import CounterReducer from './reducers/counterReducer';
import AddCartReducer from './reducers/addCartReducer';

const rootReducer = combineReducers({
  AddCartReducer,
  CounterReducer,
});

const customMiddleware = store => next => action => {
  // console.log(store);
  // console.log(store.getState());
  // console.log(next);
  // console.log(action);
  // const actionModif = {
  //   type: 'ADDCART',
  //   payload: 666,
  // };
  // next(actionModif);
  next(action);
};

// const Store = configureStore({ reducer: AddCartReducer });
export const store = configureStore({
  reducer: rootReducer,
  middleware: [customMiddleware],
});
