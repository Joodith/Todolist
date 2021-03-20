import React from 'react';
import  './style.css';


class TodoItem extends React.Component{
    render(){
        const _todo=this.props.todo;
        return(
            <div className={ 'todoItem' +   ( _todo.done   ?    ' done'   :   '') } onClick={this.toggleTodo}>
                {_todo.text}
            </div>
        );
    }
toggleTodo=()=>{
    this.props.markTodoFunc(this.props.todo);
}
}
export default TodoItem;