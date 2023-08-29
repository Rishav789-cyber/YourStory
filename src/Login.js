import React, { useState ,useEffect} from 'react'
import './Login.css'
import { useDispatch } from 'react-redux';
import {login} from './userSlice';
import {auth} from "./firebase.js"
function Login() {
    const[email,setEmail]=useState("");
    const[name,setName]=useState("");
 
    const[pass,setPass]=useState("");
    const dispatch=useDispatch();
    const loginToApp=(e)=>{

        e.preventDefault();
        auth.signInWithEmailAndPassword(email,pass)
        .then(userAuth=>{dispatch(login({
            email:userAuth.user.email,
            uid:userAuth.user.uid,
            displayName:userAuth.user.displayName
        })

        )}).catch(error=>alert(error.message))
    }
    const test=()=>{
        console.log(name);
        console.log(email);
        console.log(pass);
    }
    const register=()=>{

if(!name){
    return alert("Please enter a full name");

}
auth.createUserWithEmailAndPassword(email,pass)
.then((userAuth)=>{
userAuth.user.updateProfile({
    displayName:name,
})
.then(()=>{
dispatch(login({
    email:userAuth.user.email,
    uid:userAuth.user.uid,
    displayName:name
}))
})
}).catch(error=>alert(error.message));
    }
  return (
    <div className="login">
        <img className="imgT" src="https://images.unsplash.com/photo-1626447857058-2ba6a8868cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1834&q=80" alt=""/>
        <form>
           <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter full name (required if registering)"/>
           <input value={email} type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
           <input value={pass} type="password" onChange={(e)=>setPass(e.target.value)} placeholder="Password"/>
<button onClick={loginToApp} type="submit">Sign In</button>
        </form>
        <p>
            Not a member?{" "}
            <span onClick={register}  className="register1">Register Now</span>
        </p>
       
    </div>
  )
}

export default Login