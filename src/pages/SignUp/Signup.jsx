import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";

const Signup = () => {

  const {createUser} = useContext(AuthContext);
  const handleSignup = (e) => {

    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // password validation
    const regex = /^(?=.*[A-Za-z])(?=.*[!@#$%^&*]).{6,}$/;
    if (!regex.test(password)) {
      alert(
        "Password must be at least 6 characters, contain one letter and one special character"
      );
      return;
    }
    console.log("Password is valid");

  createUser(email , password)
  .then(result => {
    console.log(result.user)
  })
  .catch(err => {
     console.log(err.message);
  })


  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>
        <div className="card  w-full max-w-sm shrink-0 shadow-2xl bg-blue-300">
          <h1 className="text-4xl font-bold mx-auto mt-4">Sign Up now!</h1>
          <div className="card-body">
            <form onSubmit={handleSignup} className="fieldset">
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
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
