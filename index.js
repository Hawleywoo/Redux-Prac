import { createStore } from 'redux'


const store = createStore(() => {})

const incrementAction = {type: 'INCREMENT', payload: '' }

store.dispatch(incrementAction)

const count = (state=0, action) => {

    switch (action.type){
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default: 
            return state
    }
}