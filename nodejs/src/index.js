import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Cats from './Cats';
import Dogs from './Dogs';
import Birds from './Birds';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-default" ng-controller="navbarCtrl">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#">seans-reactjs-nodejs-mongodb-boilerplate</a>
                            </div>
                            <ul className="nav navbar-nav">
                                <li><Link to={'/'}>Home</Link></li>
                                <li><Link to={'/Cats'}>Cats</Link></li>
                                <li><Link to={'/Dogs'}>Dogs</Link></li>
                                <li><Link to={'/Birds'}>Birds</Link></li>
                            </ul>
                        </div>
                    </nav>
                    <div className="container">
                        <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path='/Cats' component={Cats} />
                            <Route path='/Dogs' component={Dogs} />
                            <Route path='/Birds' component={Birds} />
                        </Switch>
                    </div>

                    <footer className='footer'>
                        <div className='container'>
                            <span className='text-muted'>You can download this project from my github project page at <a href='https://github.com/Sean-Bradley/Seans-ReactJS-NodeJS-MongoDB-Boilerplate' target='_blank'>https://github.com/Sean-Bradley/Seans-ReactJS-NodeJS-MongoDB-Boilerplate</a></span>
                        </div>
                    </footer>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

