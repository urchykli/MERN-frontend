import React, { Component } from 'react';
import axios from 'axios'

class Show extends Component {
	constructor () {
    super()
    this.state = {
      posts: []
		}
	}
	componentDidMount () {
    axios.get('http://localhost:3000/api/posts')
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
		return (
			<div>
				
			</div>
		);
	}
}

export default Show;