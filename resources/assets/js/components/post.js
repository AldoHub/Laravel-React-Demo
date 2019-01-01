import React, { Component } from 'react';
import { Link} from 'react-router-dom';


export default class Post extends Component {
    constructor(){
        super();
        this.state = {
            post: "",
            edit: false,
            disabledButton: false,
            title: "",
            content: "",
            deleteId: ""
            
            
        }
        this.changeHandler = this.changeHandler.bind(this);
   
    
    }

    componentDidMount(){
        axios.get(`/api/post/${this.props.match.params.id}`)
        .then(response => {
            this.setState({post: response.data.post});
            this.setState({title: response.data.post.title});
            this.setState({content: response.data.post.content});
            this.setState({deleteId: response.data.post.id});
        }).catch(e =>{
            console.log(e);
        })
       }

    enableEdit(){
        this.setState({disabledButton: true});
        this.setState({edit: true});
       
    }   
    cancelEdit(){
        this.setState({edit: false});
        this.setState({disabledButton: false});
    }
    
    changeHandler(e){
        let target = e.target.name;
        this.setState({[target] : e.target.value })
      
    }

    handleEdit(e){
        e.preventDefault();
        axios.put(`/api/post/${this.props.match.params.id}`,{
            id: this.props.match.params.id,
            title: this.state.title,
            content: this.state.content
        })
        .then(()=>{
            axios.get(`/api/post/${this.props.match.params.id}`)
            .then(response => {
                this.setState({post: response.data.post});
                this.setState({title: response.data.post.title});
                this.setState({content: response.data.post.content});
            }).catch(e =>{
                console.log(e);
            })           
        }).catch(err => {
            console.log(err);
        });  
    }
    
    handleDelete(){
        axios.delete(`/api/post/${this.props.match.params.id}`,{
            id: this.deleteId
        })
        .then((response) => {
           console.log(response);
            this.props.history.push('/');
        }).catch(e =>{
            console.log(e);
        })           
  
    }

   

    render() {
        const enable = this.state.edit;
        let editForm;
        if(enable){
           editForm = <form onSubmit={this.handleEdit.bind(this)}>
             <p className="cancel" onClick={this.cancelEdit.bind(this)}>Cancel Edit</p>
             
           <div className="form-control">
               <label htmlFor="title">Post Title:</label>
               <input type="text" name="title" defaultValue={this.state.post.title} onChange={this.changeHandler}  />
           </div>
           <div className="form-control">
               <label htmlFor="content">Post Content:</label>
               <textarea name="content" defaultValue={this.state.post.content} onChange={this.changeHandler}></textarea>
           </div>
         
               <input type="submit" name="submit" value="Send" />
             
             
          
         </form> 
        }
       
        return (
            <div className="postContainer">
            
            <Link to={"/"}>Go Back </Link>
              <h2 className="postTitle">{this.state.post.title}</h2>
              <div className="content">{this.state.post.content}</div>
            
              <div className="controls">
                <button className="edit" disabled={this.state.disabledButton} onClick={this.enableEdit.bind(this)}>Edit Post</button>
                <button className="delete" onClick={this.handleDelete.bind(this)}>Delete Post</button>
              </div>
            {editForm}

            </div>
        );
    }
}


