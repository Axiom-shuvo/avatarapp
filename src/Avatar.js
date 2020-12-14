import React from "react";
import './Avatar.css';
import 'tachyons';
import Avatarlist from "./Avatarlist";


function avatar(){

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

    

    return(
        <div>
            <h1>Welcome To Avatar World</h1>
            <Avatarlist dataavatardata />
            <button>Subscribe</button>
        </div>
    )
}

export default avatar;