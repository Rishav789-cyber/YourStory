import React ,{useEffect, useState}from 'react'
import "./feedoptions.css"
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
function FeedOptions({Icon,title,color}) {
  const user=useSelector(selectUser);

  const[active,setActive]=useState(false);
const[like,setLike]=useState(false);

  const click=()=>{
 setActive(!active);
 

 
  }
  return (
    <div className="options">
    

<Icon onClick={click} style={{color: active ? "#0074e1":color}} className="icon"/>
<h3 className="title">{title}</h3>
    </div>
  )
    
}


export default FeedOptions