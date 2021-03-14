import React, { Component } from "react";
import AddToDo from "./AddToDo";
import SearchToDo from "./SearchToDo";
import ShowToDo from "./ShowToDo";

export default class Todos extends Component {
  state = {
    todos: [
      {
        id: 1,
        content: "Wake Up!",
      },
      {
        id: 2,
        content: "Have Breakfast!",
      },
      {
        id: 3,
        content: "Go to Office!",
      },
    ],
    copyArr: [
        {
          id: 1,
          content: "Wake Up!",
        },
        {
          id: 2,
          content: "Have Breakfast!",
        },
        {
          id: 3,
          content: "Go to Office!",
        },
      ],

  };

  deltodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos,
    });
  };

  updatetodo = (id) =>{
    console.log(id)
    let newContent = prompt("Enter New Content");
    if(newContent!==""){
        let newObject = {
            id:id,
            content:newContent
        }
        let result = this.state.todos.map((todo)=>{
            if(todo.id!==id){
                return todo
            }
            else{
                return newObject
            }
        })
        this.setState({
            todos:result,
            copyArr:result
        })
    }
    else{
        alert('Enter Something')
    }
    
    
    
}


SearchToDo=(val)=>{
    console.log(val);
    if(val!==''){
        const arr = this.state.todos.filter((todo)=>{
            return todo.content.includes(val)
        })
        this.setState({
            todos:arr
        })
    }
    else{
        console.log("fff")
        this.setState({
            todos:this.state.copyArr
        },()=>console.log(this.state.todos))
    }

}
    addtodo=(todo)=>{
        
        if(todo.content!=='')
        {
            todo.id=Math.random();
            const todos = [...this.state.todos, todo]
            this.setState({
                todos:todos,
                copyArr:todos
            })
        }
    }

  render() {
    return (
      <div>
        
        <AddToDo addtodo={this.addtodo}/>
        <SearchToDo  SearchToDo={this.SearchToDo}/>
        <ShowToDo
          todos={this.state.todos}
          deltodo={this.deltodo}
          updatetodo={this.updatetodo}
        />
        
      </div>
    );
  }
}