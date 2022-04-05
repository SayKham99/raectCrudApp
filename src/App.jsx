import React, { Component } from 'react'
import Todos from './Todos';

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <Todos/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}