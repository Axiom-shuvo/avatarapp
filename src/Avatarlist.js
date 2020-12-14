import React from 'react';
import  Aicon from'./axiomshuvo.svg';

function avatarlist(props){
    return(
        <div className="avatarstyle tc ma4 bg-light-purple dib" >
            <img src={Aicon} alt="person name" />
            <h1>{props.avatardata.name}</h1>
            <p>Front End Developer</p>
        </div>
    )
}



export default avatarlist;