import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Birds extends Component {
    render() {
        return (
            <div>
                <h1>Birds</h1>
                <p>Nothing to see here, go and see {<Link to='/Cats'>Cats</Link>} instead.</p>
            </div>
        );
    }
}
