import React, { Component } from 'react';
import './App.css';
import Show from '../Show/Show'
import Create from '../Create/Create'
import Home from '../Home/Home'
import { Route, Link } from "react-router-dom";
import axios from 'axios'


const url = "http://localhost:3001/";
class App extends Component {
  constructor() {
    super()
    this.state = {
      listOfPosts: []
    }
  }
  componentDidMount(){
    axios.get(url)
    .then((response) => {
      this.setState({listOfPosts: response.data})
    })
    console.log(this.state.listOfPosts)
  }
  render() {
    return (
      <div className="App">
      <nav>
        hi
          <Link to="/">
          <h1>Chatter</h1>
          </Link>
          <Link to="/create">
          <h1>New Post</h1>
          </Link>
        </nav>
        <main>
          <Route path="/" exact render={(routerProps) => <Home {...routerProps} {...this.state} />} />
          <Route path="/create" render={() => <Create />} />
          <Route path="/show/:_id" render={(routerProps) => <Show {...routerProps} {...this.state} />} />
        </main>
      </div>
    );
  }
}

export default App;
