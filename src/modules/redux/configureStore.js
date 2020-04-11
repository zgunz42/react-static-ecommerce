import { applyMiddleware, createStore } from 'redux'
import { persistStore} from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'

import middleware from 'modules/redux/middleware'
import rootReducer from 'modules/redux/reducer'

const composeEnhancers = composeWithDevTools(applyMiddleware(...middleware));

const initialState = {
    user: {
        logged: false
    },
    cart: {
        count: 0,
        entries: [],
    },
    snackbar: {}
};

export default function configureStore(preloadedState = initialState) {
    let store = createStore(rootReducer, preloadedState, composeEnhancers);
    let persistor = persistStore(store);
    return { store, persistor }
}
