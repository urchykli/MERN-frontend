import React, { Component } from "react";
import axios from "axios";

class Create extends Component {
   constructor() {
      super();
      this.state = {
         onePost: [],
         title: "",
         content: ""
      };
   }

   handleSubmit(e) {
       console.log("Handle submit pressed")
      const url = "http://localhost:3001/create/";
      // const soloPost = this.props.match.params._id;
      e.preventDefault();
      console.log(e.target.title.value)
      axios
         .post(`${url}`, {
            title: e.target.title.value,
            content: e.target.content.value
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
                  <input
                     name="title"
                     type="text"
                    //  value={this.state.title}
                     placeholder="Title"
                  />
                  <br />
                  <input
                     name="content"
                     type="text"
                    //  value={this.state.content}
                     placeholder="Content"
                  />
                  <br />
                  <input type="submit" value="Submit" />
               </div>
            </form>
         </div>
      );
   }
}

export default Create;
