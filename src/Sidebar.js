import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './Sidebar.css'
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';
function Sidebar() {
    const user=useSelector(selectUser);
    const recent=(topic)=>(
        <div className="sidebar_recent">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );
  return (
    <div className="Sidebar">
        <div className="Sidebar_top">
<img src="https://images.unsplash.com/photo-1626447857058-2ba6a8868cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1834&q=80" alt=""/>
<AccountCircleIcon className="icon" id="pp"/>
<h1 className="title">{user.displayName}</h1>
<h4 className="email">{user.email}</h4>
<div className="stat">
   
</div>
<div className="stat">
   
</div>


        </div>
        <div className="Sidebar_bottom">
<p className="words">Words for today</p>
{recent("bike")}
{recent("car")}
{recent("road")}
{recent("nature")}
        </div>
    </div>
  )
}

export default Sidebar