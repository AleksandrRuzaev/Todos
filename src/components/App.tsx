import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {
    constructor(props: any) {
        super(props);

    }
    testType: string = 'zzzz22233';

    render() {
        return (
            <Fragment>
                <p>This is an incredibly complex react app!</p>
                indeed {this.testType}
            </Fragment>
        );
    }
}

export default App;