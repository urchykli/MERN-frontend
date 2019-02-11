import React, { Component } from 'react';
import axios from 'axios'

class Show extends Component {
	constructor (props) {
    super(props)
    this.state = {
      onePost: []
		}
		this.handleInputChange = this.handleInputChange.bind(this);
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
	handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'text' ? target.entered : target.value;
    const title = target.title;

    this.setState({
      [title]: value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
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
        <input name="title" type="text" entered={this.state.title} value={this.state.onePost.title} onChange={this.handleInputChange} />
				<br/>
        <input name="content" type="text" value={this.state.content} onChange={this.handleInputChange} value={this.state.onePost.content} />
				<br/>
        <input type="submit" value="Update" />
      </div>
      </form>
			</div>
		);
	}
}


export default Show;