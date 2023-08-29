import React, { useState ,useEffect} from 'react'
import './feed.css'

import CreateIcon from '@material-ui/icons/Create';
import FeedOptions from './FeedOptions';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import PhotoIcon from '@material-ui/icons/Photo';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Posts from './Posts';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { selectUser } from './userSlice';
import { useSelector } from 'react-redux';
import FlipMove from "react-flip-move";
function Feed() {
  const user=useSelector(selectUser);
  const[input,setInput]=useState('');  
  const[p,setPosts]=useState([]);
  const[like,setLike]=useState(false);
  const[tags,setTag]=useState("");
  const[a,setA]=useState(false);
  const[a1,setA1]=useState(false);
  const[a2,setA2]=useState(false);
  const[a3,setA3]=useState(false);
  const[a4,setA4]=useState(false);
  const[t,setT]=useState([]);
  let z=[];
  useEffect(()=>{
    db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot)=>{
    setPosts(snapshot.docs.map((doc)=>({
      id:doc.id,
      data:doc.data(),
    })))});
  
  },[])
let var1="#bike";
let var2="#car";
let var3="#road";
let var4="#nature";
const handleDel = ({id}) => {
  db.collection('posts')
  .doc(`${id}`).delete().then(() => {
      console.log("Document successfully deleted!");
  }).catch((error) => {
      console.error("Error removing document: ", error);
  });
}
  const select=()=>{
    
    setA(!a);
   
setT((n)=>
  a ? t.filter(e=>e!==var1):[...n,var1]
)
  
}
const select1=(event)=>{
    setA1(!a1);  
    
    
       
setT((n)=>
a1 ? t.filter(e=>e!==var2):[...n,var2]
)
  }
const select2=(event)=>{
      setA2(a2);  
setT((n)=>
a2 ? t.filter(e=>e!==var3):[...n,var3]
)
}
      const select3=(event)=>{
        setA3(!a3);  
      
      
      
      
     
         
setT((n)=>
a3 ? t.filter(e=>e!==var4):[...n,var4]
)
      
        }
const select4=()=>{
setA4(!a4);
setT((n)=>
a4 ? t.filter(e=>e!==var3) : [...n,var3] 
)
}        

const sendPost=(e)=>{
 e.preventDefault();

 db.collection("posts").add({
  name:user.displayName,
  description:user.email,
  message:input,
 tag:t,
  timestamp:firebase.firestore.FieldValue.serverTimestamp(),

 });
 setInput(""); 
 setA(false);
 setA1(false);
 setA2(false);
 setA3(false);
 setT([]);
 

}
  return (
    <div className="feed">
        <div className="feedinputcon">
            <div className="feedinput">
<CreateIcon/>
<form>
    <input type="text" value={input} onChange={e=>setInput(e.target.value) } placeholder='Share your story...'/>
    <button onClick={sendPost} type="submit">Send</button>
</form>
<div>
  
</div>

<h3 className="tags" onClick={select}  style={{backgroundColor: a ? "lightgray":"white",
borderRadius:10}}>{var1}</h3>
  <h3 className="tags" onClick={select1} style={{backgroundColor: a1 ? "lightgray":"white",
borderRadius:10}}>{var2}</h3>
  
  <h3 className="tags" onClick={select4} style={{backgroundColor: a4 ? "lightgray":"white",
borderRadius:10}} >{var3}</h3>
 <h3 className="tags" onClick={select3} style={{backgroundColor: a3 ? "lightgray":"white",
borderRadius:10}} >{var4}</h3>
  
            </div>
            <div className="options">
                <h3 className="len">Total No. of posts:{p.length}</h3>
       
            </div>
        </div>
        <FlipMove>
        
          {p.map(({id,data})=>{
            return(
            <Posts key={id} onClick={()=>handleDel({id})} name={data.name} desc={data.description} msg={data.message}  tags={data.tag}/>
         ) })}


</FlipMove>
    </div>
  )
}

export default Feed