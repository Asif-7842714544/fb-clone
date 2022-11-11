import React, { Component } from 'react'
import "./UploadSection.css"
import { Paper } from "@mui/material"
import { Avatar } from '@mui/material';
import asif from "../../../images/Asif.jpg"
import live from "../../../images/video.png"
import image from "../../../images/image.png"
import feeling from "../../../images/feelings.png"


class UploadSection extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
         <div>  
           <Paper className='uploadSection'>
            <div className='upload-top'>
         <div >
            <Avatar src={asif} className="upload-img"/>
         </div>
         <div>
            <input placeholder="what's on your mind?" className='upload-box' type="text" />
         </div>
         </div>
         <div className='upload-bottom'>
          <div className='upload-tabs'>
            <img src={live} width="35px" />
            <div className='upload-text'>Live Video</div>
          </div>
          <div className='upload-tabs'>
            <img src={image} width="35px" />
            <div className='upload-text'>Photo/Video</div>
          </div>
          <div className='upload-tabs'>
            <img src={feeling} width="35px" />
            <div className='upload-text'>Feeling/Activity</div>
          </div>
         </div>
           </Paper>
           </div> 
         );
    }
}
 
export default UploadSection;