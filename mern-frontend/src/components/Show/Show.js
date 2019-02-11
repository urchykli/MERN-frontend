import React, { Component } from 'react';
import axios from 'axios'

class Show extends Component {
	constructor (props) {
    super(props)
    this.state = {
      onePost: []
		}
	}
	componentDidMount () {
		const url = 'http://localhost:3001/show'
		const soloPost = this.props.match.params._id
		console.log(soloPost)
    axios.get(`${url}/${soloPost}`)
		.then((res) => {
			console.log(res)
			this.setState({
				onePost: res.data
			})
    })
      .catch((err) => {
        console.log(err)
      })
  }
	render() {
		console.log("show rendered")
		console.log(this.state.onePost)
		return (
			<div>
				<h1>{this.state.onePost.title}</h1>
				<p>{this.state.onePost.content}</p>
				<h4>{this.state.onePost.createdAt}</h4>
			</div>
		);
	}
}


export default Show;