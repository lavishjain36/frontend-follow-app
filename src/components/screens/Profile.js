import React from 'react'

const Profile=()=> {
  return (
    <div style={{maxWidth:"550px",margin:"0px auto"}}>
      <div style={{
        display:"flex",
        justifyContent:"space-around",
        margin:"18px 0px",
        borderBottom:"1px solid grey"
      }}>
        <div>
          <img style={{width:"140px",height:"150px",borderRadius:"120px",border:"2px solid black"}}
           src="https://media.istockphoto.com/id/1334702614/photo/young-man-with-laptop-and-coffee-working-indoors-home-office-concept.jpg?b=1&s=170667a&w=0&k=20&c=D7Ux09foobFMvTvM0z4t0SbsJ6H7M0z4UbKa84CVLLw="
          alt="img1"/>
          <div className="gallery">
            <img className='item' src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="nature1"/>
            <img className='item' src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="nature1"/>
            <img className='item' src="https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="nature1"/>
            <img className='item' src="https://images.unsplash.com/photo-1618477202872-89cec6f8d62e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8TmF0dXJlJTIwaW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="nature1"/>
            <img className='item' src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNub3clMjBpbWFnZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="nature1"/>
            <img className='item' src="https://images.unsplash.com/photo-1568454537842-d933259bb258?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJla2tpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="nature1"/>
            <img className='item' src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="nature1"/>
            <img className='item' src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="nature1"/>
            <img className='item' src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="nature1"/>
            <img className='item' src="https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="nature1"/>
            <img className='item' src="https://images.unsplash.com/photo-1618477202872-89cec6f8d62e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8TmF0dXJlJTIwaW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="nature1"/>
            <img className='item' src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNub3clMjBpbWFnZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="nature1"/>
            <img className='item' src="https://images.unsplash.com/photo-1568454537842-d933259bb258?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJla2tpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="nature1"/>
            <img className='item' src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="nature1"/>
          </div>
        </div>
        <h4>RamKrishna</h4>
        <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
          <h6>40 post</h6>
          <h6>40 followers</h6>
          <h6>80 following</h6>
        </div>
      </div>
    </div>
  )
}

export default Profile