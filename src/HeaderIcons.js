import React from 'react'
import './HeaderIcons.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
function HeaderIcons({title,Icon}) {

  return (
    <div className="HeaderIcons_icon">
        
        {Icon  && <Icon className="icons"/>}
       
        <h3 className="title">{title}</h3>
    </div>
  )
}

export default HeaderIcons