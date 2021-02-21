import React, { Component, Fragment } from 'react';
import { Todos } from './todos/todos';
import './App.scss';

class App extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Todos />
        );
    }
}

export default App;