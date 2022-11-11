import React, { Component } from 'react'
import { Avatar } from '@mui/material';
import "../Mainpage.css"


class ImageLayout extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className='imagelayout-container'>
                <div className='imagelayout-imglay'>
                    <Avatar className='imagelayout-img' src={this.props.image} />   
                </div>
             <div className='imagelayout-name'>
                {this.props.text}
             </div>
            </div>
         );
    }
}
 
export default ImageLayout;