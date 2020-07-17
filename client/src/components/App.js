import React from 'react';
import NavBar from './NavBar';
import CreatePost from './CreatePost';
import PostContainer from './PostContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <CreatePost />
        <PostContainer />
      </div>
    </div>
  );
}

export default App;
