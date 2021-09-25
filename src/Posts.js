import React from "react";
import axios from "axios";
import Icon from "react-crud-icons";
import {Button,Table, Box, TableCell, TableBody,TableRow,TableHead} from "@material-ui/core";
import "./Posts.css";




const API_URL =  "https://jsonplaceholder.typicode.com/posts"

class Posts extends React.Component {
    constructor(props){
      super(props);
      this.state = {
          posts: [],
          id: "",
          userId: "",
          body: "",
          title: "",
      };

    }
    
    //  CREATE OPERATION
     createPost = async () => {
         try{
             const {userId, title, body } = this.state;
            const {data: post} = await axios.post(API_URL, {
                userId,
                title,
                body,
            });
            const  posts = [...this.state.posts];
            posts.push(post);
           this.setState({posts,  userId: "", title: "", body: ""});
          } catch (err) {
              console.log("Error creating data from server", err);
          }
          
      
     };
    
    // READ OPERATION
      getPosts = async () => {
          try{
            const {data: posts} = await axios.get(API_URL);
            this.setState({posts})
          } catch (err) {
              console.log("Error fetching data from server", err);
          }
          
      };

    //UPDATE OPERATION 
     updatePost = async () => {
        try{
            const {id, userId, title, body } = this.state;
           const {data: post} = await axios.put(`${API_URL}/${id}`, {
               userId,
               title,
               body,
           });
           const  posts = [...this.state.posts];
           const index  = posts.findIndex((p) => p.id === id);
           posts[index] = post;
           this.setState({posts, id: "", userId: "", title: "", body: ""});

         } catch (err) {
             console.log("Error updating  data from server", err);
         }
     };

    //DELETE OPERATION
      deletePost = async (postId) => {
        try{
             await axios.delete(`${API_URL}/${postId}`);
                let posts = [...this.state.posts];//this for  taking the copy of all list 
                posts = posts.filter((post) =>post.id !== postId);// this for except deleting element ,all element  will be there
                this.setState({posts});
                //console.log(`${postId} Deleted !`);
          } catch (err) {
              console.log("Error deleting  data from server", err);
          }
          
      };
      handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.id) this.updatePost();
        else this.createPost();
    };

      handleChange = ({ target: {name, value} }) => {
        this.setState({ [name]: value});

      };

      

      componentDidMount = () => this.getPosts();
      

    render(){
        return (
         <>
         
         <form onSubmit={this.handleSubmit}>
        <div>
        <h3>FOR UPDATE AND ADD POST</h3>
          <label>UserId: </label>
          <input
          name="userId" 
          type="text" 
          value={this.state.userId}
          onChange={this.handleChange}
          required
         />
         </div>
        <br />
        <div>
          <label> Title : </label>
          <input
          name="title" 
          type="text" value={this.state.title}  
          onChange={this.handleChange}
          required
           />
        </div>
        <br />
        <div>
          <label> Body: </label>
          <input
          name="body" 
          type="text" value={this.state.body}  
          onChange={this.handleChange}
          required
           />
        </div>
        <br />
        <div>
        <Box display="flex" justifyContent="space-between">
        <Button className="btn"
            type="submit"
            variant="contained">
            {'Update'}
          </Button>

          <Button className="btn"
          onClick={() => this.getPosts()}
            type="submit"
            variant="contained">
            {'ADD POST'}
          </Button>   
</Box>
        </div>
        </form>
          
    <Table>
    <TableHead>
    <TableRow>
    <TableCell>User Id</TableCell>
    <TableCell>Post Id</TableCell>
    <TableCell>Title</TableCell>
    <TableCell>Body</TableCell>
    <TableCell>Action</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>

    {this.state.posts.map((post) => {
                return(
                    <TableRow key={post.id}>
                        <TableCell>{post.userId}</TableCell>
                        <TableCell>{post.id}</TableCell>
                        <TableCell>{post.title}</TableCell>
                        <TableCell>{post.body}</TableCell>
                        <TableCell>
                            <Icon
                              name = "edit"
                              tooltip = "Edit"
                              theme = "light"
                              size = "medium" 
                              onClick={() => this.setState({...post})}
                            />
                        </TableCell>
                        <TableCell>
                        <Icon
                              name = "delete"
                              tooltip = "Delete"
                              theme = "light"
                              size = "medium" 
                              onClick={() => this.deletePost(post.id)}
                              />
                       </TableCell>
                    </TableRow>
                );
            })}
  </TableBody>
</Table>
            
        </>
        );
        
    }
}
export default Posts;  