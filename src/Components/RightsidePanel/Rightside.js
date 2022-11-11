import React, { Component } from 'react'
import "./Rightside.css"

import asif from "../../images/Asif.jpg"
import covid from "../../images/covid.png"
import group from "../../images/groups.png"
import messengerkids from "../../images/messengerkids.png"
import ads from "../../images/ads.png"
import adsMng from "../../images/admanager.png"
import blood from "../../images/blood.png"
import ImageLayout from '../Mainpage/LeftsidePanel/ImageLayout'

class Rightside extends Component {
    constructor(props) {
        super(props);
       this.state = { 
               data:[]
        }
    }

    getData=()=>{
        let jsondata =[
            {
                "image":asif,
                "text":"ASIF BASHA"
            },
            {
                "image" :"",
               "text" :"Arshad"
            },
            {
                "image" :"",
                "text":"Harun"
            },
            {
                "image" :"",
                "text" :"Rajiya"
            },
            {
                "image" :"",
                "text" :"Ibrahim"
            },
            {
                "image" :"",
                "text" :"Tahir"
            }
        ]
       this.setState({data:jsondata})
    }

    componentDidMount(){
        this.getData()
    }
   
    render() { 
        return ( 
            <div className='rightside_container'>
                <div className='rightside_header'> contact

                </div>
                <div className='rightside_content'>
                {
                    this.state.data.map((item)=>(
                        <ImageLayout  image={item.image} text={item.text}/>
                    ))
                }
                </div>
            </div>
         );
    }
}
 
export default Rightside;