import React, { Component } from 'react'

class App extends Component {
    state = {
        task: {
            name: 'my first task',
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
            <h3>{this.state.task.name}</h3>
            <h1>{this.state.task.status.toString()}</h1>
            <button onClick={() => this.handleClick(false)}> click </button>
        </div>);
    }
}
export default App;