import React, { useState } from 'react'
import { useNavigate  } from 'react-router-dom';

function Login(props) {

    const [credentials,setCredentials]=useState({email:"",password:""});
    let history = useNavigate();
    
    const handleSubmit = async (e)=>{
            e.preventDefault();
            const response = await fetch("http://localhost:5000/api/auth/login",{
                method:"POST",
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({email:credentials.email,password:credentials.password})
            });
            const json = await response.json();
            console.log(json);
            if(json.success){
                // save the aut token redirect
                localStorage.setItem('token',json.authToken); //saving data in local storage
                history("/");
                props.showAlert("LoggedIn succesfully","success")
            }else{
                // invalid credentials
                props.showAlert("Invalid Data","danger");
            }
    }


    const onChange = (e)=>{
            e.preventDefault();
            setCredentials({...credentials,[e.target.name]:e.target.value})
    }

    return (
        <div className='container my-5'>
            <h2>Login to continue in iNotebook</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name='email' aria-describedby="email" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} id="password" name='password' />
                </div>
                
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Login
