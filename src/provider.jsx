import React from 'react'
import { Provider } from 'react-redux'
import { STORE } from './store'

export default (props) => {
    return (
        <Provider store={STORE.getReduxStore()}>
            {props.children}
        </Provider>
    )
}