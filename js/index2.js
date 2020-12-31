
class Score extends React.Component {
    constructor(props){
        super(props)
        this.state = {score = 0}
        this.incrementScore = this.incrementScore.bind(this)
        this.decrementScore = this.decrementScore.bind(this)
    }

    incrementScore = () => {
        this.setState({
            score: this.state.score + 1 
        })
    }
    decrementScore = () => {
        this.setState({
            score: this.state.score - 1 
        })
    }

    render(){
        return (
            <div>
                <h1> Score World for {this.props.teamName} </h1>
                <div>
                    Score: {this.state.score} <br/>
                    <button onClick={this.incrementScore} >+</button>
                    <button onClick={this.decrementScore} >-</button>
                </div>
            </div>
        )
    }
}
var el = document.getElementById('two')
ReactDOM.render(<Score teamName='Tigers' />, el )