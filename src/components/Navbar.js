import React,{useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { UserContext } from '../App';

const Navbar=()=> {
  const {state,dispatch}=useContext(UserContext)
  const navigate=useNavigate()
  const renderList=()=>{
    if(state)
    {
      return [
        <li><Link to="/profile">Profile</Link></li>,
        <li><Link to="/create">CreatePost</Link></li>,
        <li>
           <button class="btn waves-effect waves-light #1976d2 red darken-2" type="submit" name="action"
      onClick={()=>{
        localStorage.clear();
        dispatch({type:"CLEAR"})
        navigate('/signin')
      }}>
      Logout</button>
        </li>
      ]
    }else{
      return [
        <li><Link to="/signin">Login</Link></li>,
        <li><Link to="/signup">Signup</Link></li>
      ]
    }
  }

  return (
    
  <nav>
  <div class="nav-wrapper white">
    <Link to={state?"/":"/signin"} class="brand-logo left">Instagram</Link>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      {renderList()}
    </ul>
  </div>
</nav>

  )
}

export default Navbar