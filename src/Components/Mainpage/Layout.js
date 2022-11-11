import { Grid } from '@mui/material';
import React, { Component } from 'react'
import Rightside from '../RightsidePanel/Rightside';
import LeftSide from './LeftsidePanel/LeftSide';
import "./Mainpage.css"
import PostContainer from './PostContainer/PostContainer';
import StatusBar from './StatusBar/Statusbar';
import UploadSection from './UploadSection/Uploadsection';

class Layout extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (  
            <div className='mainpage-conatiner'>
                <Grid container>
                    <Grid item xs={3}>
                       <LeftSide />
                    </Grid>
                    <Grid item xs={6} className="middle-container">

                       <StatusBar />
                       <UploadSection />
                       <PostContainer />
                    </Grid>
                    <Grid item xs={3}>
                      <Rightside />
                    </Grid>
                </Grid>
            </div>
        );
    }
}
 
export default Layout;