import React, { Component } from 'react'

class App extends Component {
    state = {
        task: {
            name: 'item 01',
            status: true,
        }
    }
    // another way of use
    //  handleClick (){
    handleClick = () => {
        const task = this.state.task;
        task.status = !task.status;
        this.setState({ task });

    }
    render() {
        return (<div>
            <div> <h1>APP</h1>     </div>
            <h3>{this.state.task.name}</h3>
            <h1>{this.state.task.status.toString()}</h1>
            <button onClick={() => this.handleClick(false)}> click </button>
        </div>);
    }
}
export default App;