import React, { Component } from 'react'
import Post from './Post';
import "./PostContainer.css"
import asif from "../../../images/Asif.jpg"
import post from "../../../images/post.jpeg"
import like from "../../../images/like.png"
import likebutton from "../../../images/likebutton.png"
import comment from "../../../images/comment.png"
import share from "../../../images/share.png"


class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[]
         }
    }

    getData=()=>{ //calling the rest api from backend
      let json=[
        {
           "post_ID":1,
           "user_id" :123456,
           "user_img" :asif,
           "user_name":"Asif",
           "description":"Loved this wallpaper",
           "post_img":post,
           "like_count":"25"
        },
        {
            "post_ID":2,
            "user_id" :123456,
            "user_img" :asif,
            "user_name":"",
            "description":"Awesome",
            "post_img":post,
            "like_count":"25"
         }
      ]
      this.setState({data:json})
    }

    componentDidMount(){
        this.getData()
    }
   
    render() { 
        return (
            <div>
                {
                    this.state.data.map((item)=>(
                        <Post object={item} />
                    ))
                }
              {/* <Post />
              <Post />
              <Post />
              <Post /> */}
            </div>
          );
    }
}
 
export default PostContainer;