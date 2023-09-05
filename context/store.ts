import { createStore } from 'redux';
import rootReducer from './reducers';
import { persistStore , persistReducer , Transform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'; 
let store: any;

// Define the persistConfig
const persistConfig = {
  key: 'singtodev',
  storage,
};

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);



if (typeof window !== 'undefined') {
  // Configure Redux DevTools extension in development
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      : undefined;

  // Create the Redux store with or without Redux DevTools
  store = createStore(persistedReducer, enhancer);
} else {
  // Create the Redux store without Redux DevTools in non-browser environments
  store = createStore(persistedReducer);
}

const persistor = persistStore(store);

export default store;
export { persistor };