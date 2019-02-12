import React, { Component } from "react";

class Create extends Component {
  constructor() {
    super();
    this.state = {
      newPost: { title: "", content: "", conservationStatus: "" }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
    console.log(this.state.name);
  }
  handleSubmit(evt) {
    this.state;
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <br />
            <input type="text" name="title" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Content:
            <br />
            <input type="text" name="content" onChange={this.handleChange} />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Create;
