import axios from "axios";
import React, { Component } from "react";


class PostForm extends Component{
    constructor(props){
        super(props)

        this.state = {
            UserId:'',
            title:'',
            body:''

        }
    }
    changeHandler = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler = (e)=>{
       e.preventDefault()
       console.log(this.state)
       axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
       .then((response)=>{console.log(response)})
       .catch((error)=>{console.log(console.error)})
    }
    render(){
        const {UserId,title,body} = this.state
        return(
            <div>
            <form onSubmit = {this.submitHandler}>
                <div><br/>
                    <input type ='text' name ='UserId' value = {UserId} onChange = {this.changeHandler}></input>
                </div><br/>
                <div>
                    <input type ='text' name ='title' value = {title} onChange = {this.changeHandler}></input>
                </div><br/>
                <div>
                    <input type ='text' name ='body' value = {body} onChange = {this.changeHandler}></input>
                </div><br/>
                <button type = 'submit'>Submit</button>
            </form>
           
            </div>
        )
    }
}

export default PostForm