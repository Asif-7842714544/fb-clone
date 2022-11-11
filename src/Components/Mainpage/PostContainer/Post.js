import React, { Component } from 'react'
import "./PostContainer.css"
import { Paper } from "@mui/material"
import { Avatar } from '@mui/material';
import like from "../../../images/like.png"
import likebutton from "../../../images/likebutton.png"
import comment from "../../../images/comment.png"
import share from "../../../images/share.png"





class Post extends Component {
    constructor(props) {
       super(props);
       this.state = {  }
    }
    
    render() { 
        return (
        <div>
           <Paper className='post-container'>
            {/* header */}
            <div className='post-header'>
                <div className='post-header-img'>
                    <Avatar className='post-img' src={this.props.object.user_img} />
                </div>
                <div className='post-header-text'>
              {this.props.object.user_name}
                </div>
            </div>

            {/* description */}
            <div className='post-discription'>
            {this.props.object.description}  
            </div>

            {/* image */}
            <div>
              <img className='post-img' src={this.props.object.post_img} width="600px" />
            </div>

            {/* like count */}
          <div className='post-likecountcontainer'>
            <div className='post-like'>
                <img className='post-img' src={like} width="20px"/>
            </div>
            <div className='post-likecount'>
             {this.props.object.like_count}
            </div>
          </div>

            {/* like share box */}
            <div className='post-likeshare'>
                <div className='post-tab'>
                <div className='post-tabfirst'>
                    <img className='post-tabimg' src={likebutton} />
                </div>
                <div className='post-tabtext'>
                    Like
                </div>
                </div>

                <div className='post-tab'>
                <div className='post-tabfirst'>
                    <img className='post-tabimg' src={comment} />
                </div>
                <div className='post-tabtext'>
                    comment
                </div>
                </div>

                <div className='post-tab'>
                <div className='post-tabfirst'>
                    <img className='post-tabimg' src={share} />
                </div>
                <div className='post-tabtext'>
                    share
                </div>
                </div>
            </div>

            {/* comment box */}
            <div className='upload-comment'>
            <div className='upload-top'>
         <div >
            <Avatar src={this.props.object.user_img} className="upload-img"/>
         </div>
         <div>
            <input placeholder="what's on your mind?" className='upload-box' type="text" />
         </div>
         </div>
          </div>
           </Paper>        
        </div>
          );
    }
}
 
export default Post;