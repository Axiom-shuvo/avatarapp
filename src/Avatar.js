import React, { Component } from "react";
import './Avatar.css';
import 'tachyons';
import Avatarlist from "./Avatarlist";


class Avatar extends Component{

    constructor(){
        super();
        this.state = {
            title : "Welcome to Avatar World"
        }
    }

    handleChange(){
        this.setState({
            title: "Thanks for Subscribe"
        })
    }

    render(){
        const avatardata=[
            {
                id:1,
                name:"PS Shuvo",
                work: "Front End Developer"
            },
            {
                id:2,
                name:"Shovo Pd",
                work: "UI/UX Developer"
            },
            {
                id:1,
                name:"Shuvro Hr",
                work: "Cyber Securiy Expert"
            },
            {
                id:1,
                name:"Gobinda Kr",
                work: "IT Expert"
            }
        ];
    
        const avatarlist = avatardata.map( (avatarcard,i)=> {
            return  (<Avatarlist key={i} name={avatarcard.name} work={avatarcard.work} />)
        } );
        
        return(
            <div className="mainpage tc" >
                <h1>{this.state.title}</h1>
                <div className="dt--fixed-ns">
                    {avatarlist}
                </div> 
                <button onClick={ ()=> this.handleChange() } >Subscribe</button>
            </div>
            )
        }

}



export default Avatar;