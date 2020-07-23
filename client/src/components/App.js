import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import { NavBar } from './NavBar'
import { PostList } from './PostList'
import { CreatePost } from './CreatePost'

const App = () => {
    return (
        <Router>
            <NavBar />
            <div className="container">
                <Switch>
                    <Route
                        exact path="/"
                        render={() => (
                            <React.Fragment>
                                <CreatePost />
                                <PostList />
                            </React.Fragment>
                        )}
                    />
                </Switch>
            </div>
        </Router>
    )
}

export default App