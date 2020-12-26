import React from 'react';
import  Aicon from'./axiomshuvo.svg';
const avaurl="https://joeschmoe.io/api/v1/";

function avatarlist(props){

    return(
        <div className="avatarstyle ma4 dib pa2 bg-light-purple grow shadow-4 " >
            <img src={`${avaurl}${props.name}`} alt="person name" />
            <h1>{props.name}</h1>
            <p>{props.work}</p>
        </div>
    )
}



export default avatarlist;