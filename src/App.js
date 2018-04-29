import React, { Component } from 'react';
import posts from './posts'

class App extends Component {
  constructor() {
    super();
    this.state = {
      newSearch: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.filterPosts = this.filterPosts.bind(this);
  }

  handleChange(event) {
    this.setState({
      newSearch: event.target.value,
    })
  }

  filterPosts(post) {
  	return post.title.toLowerCase().includes(this.state.newSearch.toLowerCase())
  }

  renderPost(post) {
    return (
      <li key={post.title}>
        <a href={post.url}><img src={post.image} /></a>
        <p>{post.title}</p>
      </li>
    )
  }

  render() {
    return (
      <div>
        <div className="filter">
          <input type="text" placeholder="Ingresa el término de búsqueda" value={this.state.newSearch} onChange={this.handleChange} />
        </div>
        <ul>
          {posts.filter(this.filterPosts.bind(this)).map(this.renderPost)}
        </ul>
      </div>
    )
  }
}

export default App
