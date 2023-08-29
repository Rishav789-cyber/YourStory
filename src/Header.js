import React, { useState } from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';
import HeaderIcons from './HeaderIcons';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './userSlice';
import { auth } from './firebase.js';
function Header() {
  const user=useSelector(selectUser);
  const[title,setTitle]=useState(false);
  const dispatch=useDispatch();
  const logoutofapp=()=>{
dispatch(logout());
auth.signOut();
  }
  return (
    <div className='header'>
<div className='header_right'>
    <img className="im" src="https://images.unsplash.com/photo-1626447857058-2ba6a8868cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1834&q=80" alt=""/>
    <div className='header_search'>
    
    </div>
</div>
<div className="header_left">



<div className="acc">
  <AccountCircleIcon onClick={logoutofapp}/>
<h3 className='txt' onClick={logoutofapp} >{!user?"Welcome":user.displayName}</h3>
</div>

</div>
    </div>
  )
}

export default Header