import React, { useState } from 'react'

function Login() {

const[name,setName]= useState("")
const[password,setPassword]= useState("")

  const handleform=(e)=>{
   e.preventDefault()
   const userdata={
    name:name,
    password:password,
    usertype:name!=="admin"?"user":"admin",
    loggedin:true
   }

   console.log(userdata)
   localStorage.setItem("user_data",JSON.stringify(userdata))

  }

  return (
    <div>
         <form action="" onSubmit={handleform}>

        <input type="text" placeholder='username' 
        value={name}
        onChange={(e)=> setName(e.target.value)} 
        />
        <input type="password" placeholder='password' 
        value={password}
        onChange={(e)=> setPassword(e.target.value)} 
        />
        <button type='submit'>Login</button>
         </form>
    </div>
  )
}

export default Login