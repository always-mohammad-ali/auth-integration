// import React, { use, useContext } from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FirebaseAuthContext } from "../contexts/FirebaseAuthContext";

// import { FirebaseAuthContext } from "../contexts/FirebaseAuthContext";

const Navbar = () => {
     
    // const userInfo = useContext(FirebaseAuthContext);
    // console.log('hey', userInfo)
    
    const {user, signOutUser} = useContext(FirebaseAuthContext)
    console.log(user)

    const handleSignOut = () =>{
      signOutUser()
      .then(() =>{
        console.log('sign out done')
      })
      .catch(error =>{
        console.log(error)
      })
    }   



    const links = <>
        
            <li><NavLink to='/' className={({isActive}) =>isActive ? 'bg-green-300 text-black font-bold' : ''}>Home</NavLink></li>
            <li><NavLink to='/login' className={({isActive}) =>isActive ? 'bg-green-300 text-black font-bold' : ''}>login</NavLink></li>
            <li><NavLink to='/register' className={({isActive}) =>isActive ? 'bg-green-300 text-black font-bold' : ''}>Register</NavLink></li>
            <li><NavLink to='/dashboard' className={({isActive}) =>isActive ? 'bg-green-300 text-black font-bold' : ''}>Dashboard</NavLink></li>
            {
              user && 
              <>
                  <li><NavLink to='/orders' className={({isActive}) =>isActive ? 'bg-green-300 text-black font-bold' : ''}>Orders</NavLink></li>
                  <li><NavLink to='/profile' className={({isActive}) =>isActive ? 'bg-green-300 text-black font-bold' : ''}>Profile</NavLink></li>
              </>
            }
        </>

     
    
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >

              {links}
              
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            
            {links}
           
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ?
            <>
             <p>{user.email}</p>;
             <button onClick={handleSignOut} className="btn">Sign Out</button> 
            </>
             : 
             <Link className="btn" to='/login'>Login</Link>
          }
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
