import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App'
const Profile=()=> {
const [mypics,setPics]=useState([])
const {state,dispatch} = useContext(UserContext)

useEffect(()=>{
  fetch("/mypost",{
    headers:{
      "Authorization":"Bearer " +localStorage.getItem("jwt"),
    }
  }).then(res=>res.json())
  .then(result=>{
  console.log(result.mypost)
  setPics(result.mypost)
})
},[])

  return (
    <div style={{maxWidth:"550px",margin:"0px auto"}}>
      <div style={{
        display:"flex",
        justifyContent:"space-around",
        margin:"18px 0px",
        borderBottom:"1px solid grey"
      }}>
        <div>
          <img style={{width:"140px",height:"150px",borderRadius:"120px"}}
           src="https://media.istockphoto.com/id/1334702614/photo/young-man-with-laptop-and-coffee-working-indoors-home-office-concept.jpg?b=1&s=170667a&w=0&k=20&c=D7Ux09foobFMvTvM0z4t0SbsJ6H7M0z4UbKa84CVLLw="
          alt="img1"/>
         
        <h4>{state?state.name:"loading"}</h4>
        <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
          <h6>40 post</h6>
          <h6>40 followers</h6>
          <h6>80 following</h6>
        </div>
      </div>
    </div>
    <div className="gallery">
    {
      mypics.map(item=>{
        return(
          <img key={item._id} className='item' src={item.photo} alt={item.title}/>
        )
      })
    }
          </div>
    </div>
  )
}

export default Profile