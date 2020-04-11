import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'modules/redux/configureStore'
import { PersistGate } from 'redux-persist/integration/react'

export const withRedux = (PageComponent, { ssr = true } = {}) => {
    const WithRedux = ({ initialReduxState, ...props }) => {
        const {store, persistor} = getOrInitializeStore(initialReduxState)
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <PageComponent {...props} />
                </PersistGate>
            </Provider>
        )
    }

    return WithRedux
}

let redux = {
    store: undefined,
    persistor: undefined,
}

const getOrInitializeStore = initialState => {
    // Always make a new store if server, otherwise state is shared between requests
    if (typeof window === 'undefined') {
        return configureStore(initialState)
    }

    // Create store if unavailable on the client and set it on the window object
    if (!redux.store || !redux.persistor) {
        redux = configureStore(initialState)
    }

    return redux
}
