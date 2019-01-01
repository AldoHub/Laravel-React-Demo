import React, { Component } from 'react';


export default class CreatePost extends Component {
    constructor(){
        super();
        this.state = {
            title: "",
            content: "",
        }
    }

    //manage the changes on the input fields
    changeHandler(e){
        let target = e.target.name;
        this.setState({[target] : e.target.value })
      
    }

    //manage the form submit
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
        
        axios.post("api/posts", {
            title: this.state.title,
            content: this.state.content
        })
        .then(response =>{
            console.log(response);
            document.getElementById("createPost").reset();

        }).catch(err => {
            console.log(err);
        });
    }


    render() {
        return (
          <form id="createPost" onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-control">
                <label htmlFor="title">Post Title:</label>
                <input type="text" name="title" onChange={this.changeHandler.bind(this)} />
            </div>
            <div className="form-control">
                <label htmlFor="content">Post Content:</label>
                <textarea name="content" onChange={this.changeHandler.bind(this)}></textarea>
            </div>
          
                <input type="submit" name="submit" value="Send" />
           
          </form>
        );
    }
}


