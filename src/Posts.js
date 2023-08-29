import React ,{forwardRef, useState}from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "./posts.css"
import FeedOptions from './FeedOptions';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import { useDispatch, useSelector } from 'react-redux';
import { db } from './firebase';

import { selectUser } from './userSlice';
import { PermContactCalendar } from '@material-ui/icons';
const Posts=forwardRef(({key,onClick,name,desc,msg,tags},ref)=> {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();
 
  const[n,setN]=useState(0);
const c=()=>{
  setN(n+1);
}

  return (
    <div ref={ref} className="posts">
      <div className="d">
        <div className="flex">
<div className="posts_header">
    <AccountCircleIcon  id="pp" className="icon"/>
</div>
<div className="posts_info">
<h2 className="name">{name}</h2>
<p className="desc">{desc}</p>
</div>

</div>
<div><button onClick={onClick} className="del" >Delete</button></div>
</div>
<div className="posts_body">
<p className="msg">{msg}</p>
<div className="t">
{tags?.map((tag)=>{
return (<h3 className="h">{tag}</h3>)
})}
</div>
</div>
<div className="options">
              
               
                
               
                
            </div>
</div>
  )
})

export default Posts