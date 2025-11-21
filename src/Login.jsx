import { Link } from 'react-router-dom';
import "tailwindcss";

const Login = () => {
  return (
    <div className=''>
      <h1 className='text-center '>Eternal Family</h1>
      <p>Welcome</p>
      <form action="">
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
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login;
