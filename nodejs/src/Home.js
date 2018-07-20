import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="jumbotron text-center">
                    <h1>seans reactjs nodejs mongodb boilerplate</h1>
                    <p>Boilerplate for ReactJS, NodeJS and MongoDB.</p>
                    <p>Includes Gulp Minify, Uglify, Concat, Mocha and Chai Tests</p>
                </div>
                <p>Nothing to see here, go and see {<Link to='/Cats'>Cats</Link>} instead.</p>
            </div>
        );
    }
}
export default Home;