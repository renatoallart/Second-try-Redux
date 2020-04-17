import React from 'react'
import ReactDom from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import App from './main/app'
import reducer from './main/combaineReducers'


ReactDom.render(
    
        <Provider store={createStore(reducer)}>
            <App />
        </Provider>    
    
    ,document.getElementById('root'))