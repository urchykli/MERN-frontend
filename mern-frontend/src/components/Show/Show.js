import React, { Component } from "react";
import axios from "axios";

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onePost: [],
      title: "",
      content: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
  }
  componentDidMount() {
    const url = "http://localhost:3001/show";
    const soloPost = this.props.match.params._id;
    console.log(soloPost);
    axios
      .get(`${url}/${soloPost}`)
      .then(res => {
        console.log(res);
        this.setState({
          onePost: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleChange(e) {
    // console.log(name, value)
    this.setState({ [e.target.name]: e.target.value });
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
  handleDestroy() {
    // const url = "http://localhost:3001/show";
    // const soloPost = this.props.match.params._id;
    let birdMan = this.props.match.params._id
    axios.delete(`http://localhost:3001/show/${birdMan}`, { });
  }
  render() {
    console.log("show rendered");
    console.log(this.state.onePost);
    console.log(this.state.title);
    return (
      <div>
        <h1>{this.state.onePost.title}</h1>
        <p>{this.state.onePost.content}</p>
        <h4>{this.state.onePost.createdAt}</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="form">
            <input
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="Title"
            />
            <br />
            <input
              name="content"
              type="text"
              value={this.state.content}
              onChange={this.handleChange}
              placeholder="Content"
            />
            <br />
            <input type="submit" value="Update" />
          </div>
        </form>
        <form method="delete">
        <input type="submit" value="Delete" onClick={this.handleDestroy} />
        </form>
      </div>
    );
  }
}

export default Show;
