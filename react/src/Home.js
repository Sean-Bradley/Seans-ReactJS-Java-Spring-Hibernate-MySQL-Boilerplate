import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="jumbotron text-center">
                    <h1>seans reactjs java spring hibernate mysql boilerplate</h1>
                    <p>todo</p>
                    <p>todo</p>
                </div>
                <p>Nothing to see here, go and see {<Link to='/Cats'>Cats</Link>} instead.</p>
            </div>
        );
    }
}

