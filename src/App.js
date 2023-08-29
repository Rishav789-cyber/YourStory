import React from 'react';
import Header from './Header.js'
import Sidebar from './Sidebar.js'
import './App.css';
import { useEffect } from 'react';
import Feed from './Feed.js';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser ,logout} from './userSlice.js';
import Login from './Login.js'
import { auth } from './firebase.js';
function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
dispatch(login({
  email:userAuth.email,
  uid:userAuth.uid,
  displayName:userAuth.displayName
}))
      }else{
dispatch(logout());
      }
    })
  },[])
  return (
    <div className="App">
      <Header/>
      {!user ? (<Login/>) :
     ( <div className="app_body"> 
      <Sidebar/>
      <Feed/>
      </div>
    )}
      
     
    </div>
  );
}

export default App;
