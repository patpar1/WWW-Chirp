import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { NavBar } from './NavBar'
import { PostList } from './PostList'
import { CreatePost } from './CreatePost'

/* Main app component for displaying the components */
const App = () => {
    return (
        <Router>
            <NavBar />
            <div className="container-xl">
                <CreatePost />
                <PostList />
            </div>
        </Router>
    )
}

export default App