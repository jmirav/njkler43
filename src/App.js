import React, { Component } from 'react';
import posts from './posts'


// Modifica el componente App para implmentar la funcionalidad requerida



class App extends Component {
  constructor() {
    super();

    this.state = {
      list: posts,
      newSearch: ''
    }

    // this.filterPosts = this.filterPosts.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    var updatedList = this.state.list;
    updatedList = updatedList.filter(function(el) {
      return el.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });

    this.setState({
      newSearch: event.target.value,
      list: updatedList
    })
  }

  // filterPosts(query) {
  //   return posts.filter(function(el) {
  //     return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  //   })
  // }
  render() {
    return (
      <div>
        <div className="filter">
          <input type="text" placeholder="Ingresa el término de búsqueda" value={this.state.newSearch} onChange={this.handleChange} />
        </div>
        <ul>
          {this.state.list.map((post, index) =>
            <li key={index}>
              <a href={post.url}><img src={post.image} /></a>
              <p>{ post.title }</p>
            </li>
          )}

        </ul>
      </div>
    )
  }
}


export default App
