import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const {loginUser} = useContext(AuthContext);
  const location = useLocation();
  const from = location.state || '/'; 
  const navigate = useNavigate();

  const handleLogin= (e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email , password);

    // password validation

       loginUser(email , password)
   .then(result =>{
    navigate(from);
    console.log('Login successfull' , result.user);
   })
   .catch(error =>{
    console.log('Login failed' , error);
   })

    
  };
    return (
                <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     
    </div>
    <div className="card  w-full max-w-sm shrink-0 shadow-2xl bg-blue-300">
       <h1 className="text-4xl font-bold mx-auto mt-4">Login now here</h1>
      <div className="card-body">
        <form onSubmit={ handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Log in</button>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;