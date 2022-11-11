import React, { Component } from 'react'
import "./Navbar.css"
import { Grid } from '@mui/material';
import { Avatar } from '@mui/material';
import fblogo from "../../images/logo.png"
import home from "../../images/home.svg"
import page from "../../images/pages.svg"
import watch from "../../images/watch.svg"
import market from "../../images/market.svg"
import group from "../../images/groups.svg"
import asif from "../../images/Asif.jpg"

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <div>
                <Grid container className='navbar-main'>
                    <Grid item xs={3}>
                 <div className='navbar-leftbar' >
                            <img  className='navbar-logo' src={fblogo} width="35px" />
                            <input placeholder='search facebook' className='navbar-search' type="text" />
                        </div>
                    </Grid>
                    <Grid  item xs={6}>
                    <div className='navbar-container'>
                      <div className='navbar-tabs active'>
                      <img  src={home} height="35px" width="35px" />
                      </div>
                      <div className='navbar-tabs '>
                      <img src={page} height="35px" width="35px" />
                      </div>
                      <div className='navbar-tabs'>
                      <img src={watch} height="35px" width="35px" />
                      </div>
                      <div className='navbar-tabs'>
                      <img src={market} height="35px" width="35px" />
                      </div>
                      <div className='navbar-tabs'>
                      <img src={group} height="35px" width="35px" />
                      </div>
                    </div>
                    </Grid>
                    <Grid item xs={3}>
                    <div className='navbar-right'>
                       <div className='navbar-righttab'>
                        <Avatar className='navbar-rightimg' src={asif} />
                        <div className='navbar-profilename'>Asif</div>
                       </div>
                    </div>    
                    </Grid>
                    
                </Grid>
            </div>
          );
    }
}
 
export default Navbar;