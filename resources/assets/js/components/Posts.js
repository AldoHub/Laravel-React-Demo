import React, { Component } from 'react';
import {Link} from "react-router-dom";
import image from "../../607.svg";

export default class Posts extends Component {
    constructor(){
        super();
        this.state = {
            posts: []
        }
    }
    
    

    componentDidMount(){
       
        axios.get("/api/posts")
        .then(response => {
           this.setState({posts: response.data.data});
        }).catch(err => {
            console.log(err);
        })
    }


    render() {
        return (
            <div>
              
           
                <div className="postsContainer">
                 
                {this.state.posts.map(post => {
                   
                    return(
                        <div className="post" key={post.id}>
                            <h2>{post.title.substring(0, 20) + "..."}</h2>
                            <p>{post.content.substring(0, 100) + "..."}</p>
                            <Link to={"/post/" + post.id}>Read More</Link>
                        </div>
                    );
                    
                })}
                </div>
            </div>
        );
    }
}


