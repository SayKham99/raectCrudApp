import React, { Component } from 'react'

export default class Todos extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                { id: 1, title: 'First', complited: true },
                { id: 2, title: 'Second', complited: false },
                { id: 3, title: 'Three', complited: false },
            ]
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let nTd =  {
            id: Date.now(),
            title: e.target[0].value,
            complited: false,
        };

        this.setState({
            todos: [...this.state.todos, nTd]
        })
        e.target.reset()
    }

    handleDelete(id) {
        let confirm = window.confirm('kmdcks');
        if (confirm) {
            this.setState({
                todos: this.state.todos.filter(todo => todo.id !== id)
            })
        }
    }

    handleChange(id) {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.complited = !todo.complited;
                }
                return todo;
            })
        })
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <form className='input-group input-group-sm' onSubmit={this.handleSubmit}>
                            <input required type="text" className='form-control' id='title' placeholder='Enter' />
                            <button className='btn btn-success' type='submit'>Add</button>
                        </form>
                    </div>
                    <div className="card-body">
                        <ul className='list-group'>
                            {this.state.todos.map(todo => {
                                return (
                                    <li className='list-group-item d-flex justify-content-between align-items-center'>
                                        <span className={todo.complited ? 'text-decoration-line-through' : ''}>{todo.title}</span>
                                        <div className="btn-group">
                                            <button className='btn btn-sm btn-light border border-secondary' onClick={() => this.handleChange(todo.id)}>{todo.complited ? '%' : '^'}</button>
                                            <button className='btn btn-sm btn-light border border-secondary' onClick={() => this.handleDelete(todo.id)}>#</button>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
