import React, { Component } from 'react'
import { Paper } from "@mui/material"
import "./Statusbar.css"

class Status extends Component {
    constructor(props) {
        super(props);
         this.state = {  }
    }
   
    render() { 
        return (
            <div>
              <Paper className='statusbar-status'/>
            </div>
          );
    }
}
 
export default Status;