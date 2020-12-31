import React from 'react'
import { createStore } from 'redux'
import PropTypes from 'prop-types'
import axios from 'axios'
import debounce from 'lodash.debounce'
import { Provider } from 'react-redux'
// Provider is a HIGHER ORDER COMPONENT wrap main component in this
// provider passes in a dispath method to main component as props
// provider tells child components which store to use

import { connect } from 'react-redux'
// import connect in lower components
// wrap exported component in connect to connect it with redux

export default connect(function mapStateToProps(state, props){
    return {
        originAmount: state.originAmount
    }
})(NameOfComponent)
// Redux recomends only connecting a container component
let defaultState = {
    originAmount: '0.00'
};

// reducer 
function amount(state = defaultState, action) {
    if(action.type === 'CHANGE_ORIGIN_AMOUNT') {
        return {
            ...state,
            originAmount: action.data
        }
    }
    return state
}

// store. pass in reducer function to store
// when you create store it calls the reducer once
let store = createStore(amount)


// subscribing to store update 
store.subscribe(function(){
    console.log('state', store.getState())
})


//  updating store
store.dispatch({type: 'CHANGE_ORIGIN_AMOUNT', data: '300.65'}); 

// store should be in top level component
// redux convention is to create store dir and put configureStore