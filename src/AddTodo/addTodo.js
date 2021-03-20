import React from 'react';

class AddTodo extends React.Component{
    constructor(){
        super();
        this.state={
            todo:' '
        }
    }
    render(){
        return(
            <div>
                <form onSubmit={ (e) => this.submitTodo(e) } className="addtodo_form">
                    <input id="text_todo" onChange={ (e) => this.updateTodo(e) }  type="text"/> 
                    <button type="submit">Add Todo</button>

                </form>

            </div>
        );
    }

    updateTodo = (e)=>{
     this.setState({ todo:e.target.value });

    }
    submitTodo=(e)=>{
        e.preventDefault();
       this.props.addingTodoFunc(this.state.todo);
       document.getElementById('text_todo').value=' ';
    }

}
export default  AddTodo;