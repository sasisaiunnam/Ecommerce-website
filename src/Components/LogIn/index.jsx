import React, { useState } from 'react'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom'; 

function LogIn() {
  const navigation = useNavigate()

  const loginDetails ={
    email : 'sasi@gmail.com',
    password : '1234@s',
    token : 'jwt_token'
  };
  const [email,setEmail] =useState('')
  const [password,setPassword] = useState('')

  const handleLogIn =(e) =>{
    e.preventDefault();
    if(email === loginDetails.email && password === loginDetails.password){
      Cookies.set('token', loginDetails.token, { expires: 7 });
      navigation ('/Home')

    }
    else{
      alert('invalid credentials')
    }
  }
  return (
    <div>
      <form onSubmit={handleLogIn}>
        <input value={email} placeholder='enter email' type='text'
        onChange={(e) => setEmail(e.target.value)}/>
        <input placeholder='enter password' type='password'
        onChange={(e) => setPassword(e.target.value)} value={password}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default LogIn
