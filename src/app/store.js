import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../app/features/counter/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})


export default store;

/* const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); */
