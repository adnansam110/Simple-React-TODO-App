import React, { Component } from 'react'

export default class AddToDo extends Component {
    state = {
        content:""
    }
    newObj =(e)=>{
        this.setState({
            content:e.target.value
        })
    }
    addTask = (e)=>{
        e.preventDefault();
        this.props.addtodo(this.state);
        this.setState({
            content:""
        })
    }
    render() {
        return (
            <div>
                <input  type='text' placeholder="Enter new Todo" onChange={this.newObj} value={this.state.content}></input>
                <button className='btn btn-primary' style={{ marginLeft:'10px' }} onClick={this.addTask}>Add Todo</button>
            </div>
        )
    }
}
