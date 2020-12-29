import React from 'react'

class Score extends React.Component {
    render(){
        return (
            <div>
                <h1> Score World for {this.props.teamName} </h1>
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