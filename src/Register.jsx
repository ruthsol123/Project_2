import React from 'react'
import "tailwindcss";
const Register = () => {
  return (
   <div className=''>
      <h1 className='text-center '>Eternal Family</h1>
      <p>Welcome</p>
      <form action="">
        {/* First Name */}
        <div>
          <label>First Name</label>
          <input type="text"/>
        </div>

        {/* Late Name */}
        <div>
          <label>Last Name</label>
          <input type="text" />
        </div>

       {/* Email */}
       <div>
          <label>Email</label>
          <input type="text" />
        </div>

       {/* Date of birth */}
       <div>
          <label>Date of birth</label>
          <input type="date" />
        </div>

      {/* Profile Picture */}
      <div>
        <label>Add your profile picture</label>
        <input type="file" />
      </div>

       {/* user name */}
        <div>
          <label>User Name</label>
          <input type="text" />
        </div>

       {/* password */}
        <div>
          <label>Password</label>
          <input type="text" />
        </div>

       {/* Comform password */}
        <div>
          <label>Comform Password</label>
          <input type="text" />
        </div>

       {/* button one */}
        <button>Create Account</button>
      </form>
    </div>
  )
}

export default Register
