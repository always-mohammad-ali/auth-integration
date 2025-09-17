import React, { use } from "react";
import { Link } from "react-router-dom";
import { FirebaseAuthContext } from "../contexts/FirebaseAuthContext";

const Login = () => {

  const {signInUser} = use(FirebaseAuthContext)

  const handleLogin = e =>{

       e.preventDefault();
       
       const email = e.target.email.value;
       const password = e.target.password.value;
       console.log(email, password)

       signInUser(email, password)
       .then(result =>{
        console.log(result.user)
       })
       .catch(error =>{
        console.log(error)
       })
      
       
       
  }

  return (
    <div>
      <div className="text-center w-1/2 mx-auto   ">

      <h1 className="text-4xl text-center text-green-300 my-5">Login Now!</h1>
        
          
          <div className=" bg-base-100 shadow-2xl">
            <div className="card-body text-center w-3/4 mx-auto">

              <form onSubmit={handleLogin} className="fieldset">
                
                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div className="text-start">
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </form>
              <p>New here? <Link to='/register' className="text-blue-500 underline"> Register</Link></p>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default Login;
