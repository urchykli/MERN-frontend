import React, { Component } from 'react';
import axios from "axios";

class Create extends Component {
	constructor() {
		super()
		this.state = {
			onePost: [],
      title: "",
      content: ""
		}
	}

	handleSubmit(e) {
    const url = "http://localhost:3001/create";
    // const soloPost = this.props.match.params._id;
    e.preventDefault();
    axios
      .put(`${url}`, {
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
        <input name="title" type="text" value={this.state.title} placeholder="Title" />
				<br/>
        <input name="content" type="text" value={this.state.content} placeholder="Content" />
				<br/>
        <input type="submit" value="Submit" />
      </div>
      </form>
			</div>
		);
	}
}

export default Create;