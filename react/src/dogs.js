import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Dogs extends Component {
    render() {
        return (
            <div>
                <h1>Dogs</h1>
                <p>Nothing to see here, go and see {<Link to='/Cats'>Cats</Link>} instead.</p>
            </div>
        );
    }
}
