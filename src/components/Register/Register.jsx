
// import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { use } from "react";
import { Link } from "react-router-dom";
import { FirebaseAuthContext } from "../contexts/FirebaseAuthContext";
// import { auth } from "../../firebase.init";

const Register = () => {
    const {createUser} = use(FirebaseAuthContext)


    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)

        

        // createUserWithEmailAndPassword(auth, email, password)

        createUser(email, password)
        .then(result =>{
            console.log(result)
        })
        .catch(error =>{
            console.log(error)
        })

        
    }
  return (
    <div>
      <div className="text-center w-1/2 mx-auto   ">
        <h1 className="text-4xl text-center text-green-300 my-5">Register Now!</h1>

        <div className=" bg-base-100 shadow-2xl">
          <div className="card-body text-center w-3/4 mx-auto">
            <form onSubmit={handleRegister} className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Enter Your Name"
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              
              <button className="btn btn-neutral mt-4">Register</button>
            </form>
            <p>
              Already Have an Account?{" "}
              <Link to="/login" className="text-blue-500 underline">
                {" "}
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
