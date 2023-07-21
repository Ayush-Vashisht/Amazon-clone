import React, { useState } from 'react'
import "./Login.css";
import { Link , useNavigate  } from 'react-router-dom';
import { auth } from "./firebase";

function Login() {
    const [email,setEmail]=useState('');
    const[password ,setPassword]=useState('');
    const navigate = useNavigate();

    const signIn=e=>{
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email,password)
            .then(auth=>{
                navigate("/")
            })
            .catch(error=>alert(error.message))
    }
    const register=e=>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                if(auth){
                    navigate("/")
                }
            })
            .catch(error=>alert(error.message))
    }
  return (
    <div className='login'>
        <Link to ="/">
        <img className='login__img' src="https://www.demandsphere.com/wp-content/uploads/2018/02/Amazon_logo.png" alt=""/>
        </Link>
        <div className='login__container'>
            <div className='login__container__signin'>
            <h1>Sign in</h1>
            <form>
                <h5>Email</h5>
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
            </form>
            <button type='submit' onClick={signIn}>Sign in</button>
            <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
            </p>
            </div>
            <div className='login__container__signup'>
                <p>New to Amazon?</p>
                <button className='login__container__signup__register' onClick={register}>Create your Amazon account</button>
            </div>
        </div>
    </div>
  )
}

export default Login