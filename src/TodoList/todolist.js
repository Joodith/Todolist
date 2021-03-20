import React from 'react';
import TodoItem from '../TodoItem/todoitem';

class TodoList extends React.Component{
    render(){
        const list_todos=this.props.list_todos;
        return(
            <div className="Listing_todos">
                {
                    list_todos.map((_activity,_index)=>{
                        return(
                        <TodoItem  markTodoFunc={this.markTodo} key={_index} todo={_activity}></TodoItem>
                        );
                    })
                }
                
            </div>

        );
    }
    markTodo=(todo)=>{
        this.props.markTodoFunc(todo);
    }

}
export default TodoList;