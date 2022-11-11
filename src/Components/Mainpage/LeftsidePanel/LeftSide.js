import React, { Component } from 'react'
import ImageLayout from './ImageLayout';
import "./Leftside.css"
import asif from "../../../images/Asif.jpg"
import covid from "../../../images/covid.png"
import group from "../../../images/groups.png"
import memories from "../../../images/memories.png"
import messengerkids from "../../../images/messengerkids.png"
import ads from "../../../images/ads.png"
import adsMng from "../../../images/admanager.png"
import blood from "../../../images/blood.png"

class LeftSide extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data :[]
         }
    }

    getData=()=>{
        let jsondata =[
            {
                "image":asif,
                "text":"ASIF BASHA"
            },
            {
                "image" :covid,
               "text" :"COVID-19 Information Centre"
            },
            {
                "image" :group,
                "text":"Friends"
            },
            {
                "image" :messengerkids,
                "text" :"Messenger kids"
            },
            {
                "image" :ads,
                "text" :"Ad Center"
            },
            {
                "image" :adsMng,
                "text" :"Ads Manager"
            },
            {
                "image" :blood,
                "text" :"Blood Donation"
            }
        ]
       this.setState({data:jsondata})
    }

    componentDidMount(){
        this.getData()
    }
    
    render() { 
        return (
            <div>

                {
                    this.state.data.map((item)=>(
                        <ImageLayout image={item.image} text={item.text}/>
                    ))
                }

               
               {/* <ImageLayout image={covid} text="COVID-19 Information Centre"/>
               <ImageLayout image={group} text="Friends" />
               <ImageLayout image={memories} text="Friends" /> */}
            </div>
          );
    }
}
 
export default LeftSide;
