import React from 'react';
import './App.css';
import TodoList from './TodoList/todolist';
import  AddTodo from './AddTodo/addTodo';


class App extends React.Component{
    constructor(){
        super();
        this.state={
            'todos':[]
        };
        }
    render(){
        return(
            <div>
            <AddTodo  addingTodoFunc={ this.addingTodo}></AddTodo>
            <TodoList  markTodoFunc={this.markTodo} list_todos={ this.state.todos }></TodoList>
            </div>
        );
    }
    componentDidMount(){
        const todos=localStorage.getItem('todos');
        if(todos){
            const saved_todos=JSON.parse(todos);
            this.setState({ todos: saved_todos });
        }
        else{
            console.log("No todos");
        }
    }

    addingTodo= async (todo)=>{
       await  this.setState({ todos:[...this.state.todos,{
           text :todo,
           done :false
       }] });
       localStorage.setItem('todos',JSON.stringify(this.state.todos));
    }

    markTodo=(todo_obj)=>{
        const newtodos=this.state.todos.map(k=>{
            if(k===todo_obj)
            return{
                text: k.text,
                done: !k.done
        }
        else
               return k
        })
        console.log(newtodos);
    }

}
export default App;