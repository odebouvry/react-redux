import {
  configureStore,
  combineReducers,
  // applyMiddleware,
} from '@reduxjs/toolkit';
import counterReducer from './reducers/counterReducer';
import addCartReducer from './reducers/addCartReducer';
import dataImgReducer from './reducers/dataImgReducer';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
  addCartReducer,
  counterReducer,
  dataImgReducer,
});

// const customMiddleware = store => next => action => {
//   // console.log(store);
//   // console.log(store.getState());
//   // console.log(next);
//   // console.log(action);
//   // const actionModif = {
//   //   type: 'ADDCART',
//   //   payload: 666,
//   // };
//   // next(actionModif);
//   next(action);
// };

// const Store = configureStore({ reducer: AddCartReducer });
// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: [customMiddleware],
// });
export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
