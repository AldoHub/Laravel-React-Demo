import React from "react";
import { Switch, Route} from "react-router-dom";


//import the components
import CreatePost from "./CreatePost";
import Posts from "./Posts";
import Post from "./Post";

const Routes = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/createPost" component={CreatePost} />
            <Route exact path="/post/:id" component={Post} />
          
        </Switch>
    </div>    
) 

export default Routes;