// import { createStore } from 'redux'


// const store = createStore(() => {})

// const incrementAction = {type: 'INCREMENT', payload: '' }

// store.dispatch(incrementAction)

// const count = (state=0, action) => {

//     switch (action.type){
//         case 'INCREMENT':
//             return state + 1
//         case 'DECREMENT':
//             return state - 1
//         default: 
//             return state
//     }
// }

class Score extends React.Component {
    render(){
        return (
            <div>
                <h1>Score World for {this.props.teamName} </h1>
                <div>
                    Score: 50 <br/>
                    <button>+</button>
                    <button>-</button>
                </div>
            </div>
        )
    }
}
var el = document.getElementById('two')
ReactDOM.render(<Score teamName='Tigers' />, el )