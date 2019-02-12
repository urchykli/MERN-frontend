import React, { Component } from 'react';
import axios from 'axios'

class Show extends Component {
	constructor (props) {
    super(props)
    this.state = {
      onePost: []
		}
    this.handleSubmit = this.handleSubmit.bind(this);
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
  handleSubmit () {
    axios.put('http://localhost:3001', {
      title: this.props.title,
      content: this.props.content
    })
    .then(() => {
      this.props.posts.push('/')
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
				<form onSubmit={this.handleSubmit}>
      	<div className="form">
        <input name="title" type="text" entered={this.state.title} value={this.state.onePost.title} placeholder="Title" />
				<br/>
        <input name="content" type="text" entered={this.state.content} value={this.state.onePost.content} placeholder="Content" />
				<br/>
        <input type="submit" value="Update" />
      </div>
      </form>
			</div>
		);
	}
}


export default Show;