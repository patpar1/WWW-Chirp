import React, { Component } from 'react';
import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/posts")
    .then(res => res.json())
    .then(data => {
      console.log(data.post_list);
      this.setState({posts: data.post_list})
    })
    .catch(err => err);
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.posts.map(post => {
            return <li key={post._id}>{post.user}: {post.content}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
