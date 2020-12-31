import React from 'react'
import { createStore } from 'redux'
import PropTypes from 'prop-types'
import axios from 'axios'
import debounce from 'lodash.debounce'

let defaultState = 0;

// reducer 
function amount(state = defaultState, action) {
    if(action.type === 'INCREMENT') {
        return state + 1
    }
}

// store. pass in reducer function to store
// when you create store it calls the reducer once
let store = createStore(amount)


// subscribing to store update 
store.subscribe(function(){
    console.log('state', store.getState())
})


//  updating store
store.dispatch({type: 'INCREMENT'}); 
