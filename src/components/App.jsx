import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ShowTodos from './ShowTodos';
import ShowFeatured from './ShowFeatured';

function App() {
    return(
        <Router>
            <Fragment>
                <button><Link to='/'>Home</Link></button>
                {/* <button><Link to='/:id/details'></Link></button> */}
                <Switch>
                    <Route exact path='/' component={ShowTodos}></Route>
                    <Route exact path='/todos/:id/' component={ShowFeatured}></Route>
                </Switch>
                <ShowTodos />
            </Fragment>
        </Router>
    );
}

export default App;