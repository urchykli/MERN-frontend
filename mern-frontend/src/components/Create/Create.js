import React, { Component } from 'react';

class Create extends Component {
	constructor() {
		super()
		this.state = {
			onePost: [],
      title: "",
      content: ""
		}
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(e) {
    // console.log(name, value)
    this.setState({[e.target.name]: e.target.value})
	}
	handleSubmit(e) {
    const url = "http://localhost:3001/show";
    const soloPost = this.props.match.params._id;
    e.preventDefault();
    axios
      .put(`${url}/${soloPost}`, {
        title: this.state.title,
        content: this.state.content
      })
      .catch(err => {
        console.log(err);
      });
  }
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
      	<div className="form">
        <input name="title" type="text" value={this.state.title} onChange={this.handleChange} placeholder="Title" />
				<br/>
        <input name="content" type="text" value={this.state.content} onChange={this.handleChange} placeholder="Content" />
				<br/>
        <input type="submit" value="Submit" />
      </div>
      </form>
			</div>
		);
	}
}

export default Create;