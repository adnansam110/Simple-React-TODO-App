import React, { Component } from 'react'

export default class SearchToDo extends Component {

    render() {
        return (
            <div>
                <input style={{ marginTop:'10px', marginBottom:'10px' }}type="text" placeholder="Search Todo..." onChange={(e)=>this.props.SearchToDo(e.target.value)}></input>
            </div>
        )
    }
}
