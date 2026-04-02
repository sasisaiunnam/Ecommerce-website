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
      navigation('/Home')
    }
    else{
      alert('invalid credentials')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <form 
        onSubmit={handleLogIn}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Email</label>
          <input
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-gray-600 mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>

      </form>
    </div>
  )
}

export default LogIn