import React, { Component } from 'react'

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                { id: 1, title: "wake", completed: false },
                { id: 2, title: "wake", completed: true },
                { id: 3, title: "wake", completed: true },
            ]
        }
    }
    handleSubmit = (e) => {
        e.prevenyDefault();
        let nTd = {
            id: Date.now(),
            title: e.target[0].value,
            completed: false,
        };
        this.setState({
            todos: [...this.state.todos, nTd],
        });
        e.target.reset();
    };

    handleDelete(id) {
        let confirmation = window.confirm("rostanmi!!")
        if (confirmation) {
            this.setState({
                todos: this.state.todos.filter(todo => todo.id !== id)
            })
        }
    }
    handleChange(id) {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        })
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <form className='input-group input-group-sm' onSubmit={this.handleSubmit}>
                        <input required type="text" className='form-control' id='title' placeholder='Enter todo here' />
                        <button className='btn btn-success' type='submit'>Add</button>
                    </form>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        {this.state.todos.map(todo => {
                            return (
                                <li className="list-group-item d-flex justify-content-between align-item-center">
                                    <span className={todo.completed ? 'text-decoration-line-through' : ''}>{todo.title}</span>
                                    <div className="btn-group">
                                        <button className="btn btn-sm btn-light border border-secondary" onClick={() => this.handleChange(todo.id)}>{todo.completed ? '☑️' : '✅'}</button>
                                        <button className="btn btn-sm bnt-light border border-secondary" onClick={() => this.handleDelete(todo.id)}>❌</button>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}