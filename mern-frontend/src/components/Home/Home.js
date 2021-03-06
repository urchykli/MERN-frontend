import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'

class Home extends Component {
	constructor() {
		super()
		this.state = {
			posts: []
		}
	}
	componentDidMount () {
    axios.get('http://localhost:3001/')
      .then((res) => {
        console.log(res)
        this.setState({
          posts: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  render() {
		console.log(this.state.posts)
    let posts = this.state.posts.map(item => {
      return (
        <div className="posts-home" key={item.posts}>
          <Link to={"/show/" + item._id}>
          {/* <Link to={"/show/"}> */}
            <div>
							<h1>{item.title}</h1>
							<p>{item.content}</p>
							<h4>{item.createdAt}</h4>
						</div>
          </Link>
        </div>
      );
    });
    return (
      <div>
        {posts}
      </div>
    );
  }
}

export default Home;