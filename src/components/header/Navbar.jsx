import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const {user, signOutUser } = useContext(AuthContext)
  console.log(user)
    const navLink =<>
    <NavLink to='/' className={({isActive})=>isActive?' border-b-2 border-red-600':''}><li className="text-2xl text-white font-semibold ">Home</li></NavLink>
    <NavLink to='/login' className={({isActive})=>isActive?' border-b-2 border-red-600':''}><li className="text-2xl text-white font-semibold ">Login</li></NavLink>
    <NavLink to='/register' className={({isActive})=>isActive?' border-b-2 border-red-600':''}><li className="text-2xl text-white font-semibold ">Register</li></NavLink>
{   user && 
<NavLink to='/pdata' className={({isActive})=>isActive?' border-b-2 border-red-600':''}><li className="text-2xl text-white font-semibold ">Personal Data</li></NavLink>
}    
    </>
        const handleSignOut =()=>{
          signOutUser()
          .then()
          .catch(error => console.log(error))
        }
   
    return (
        
            <div className="navbar bg-sky-600">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLink}
      </ul>
    </div>
    <Link to='/'><a className="btn btn-ghost text-xl text-black">Firebase</a></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-11">
      {navLink}
    </ul>
  </div>
  <div className="navbar-end">
 { user ?<>  
    <a onClick={handleSignOut} className="btn">Log Out</a>
   </>: <button className="btn">Login</button>
 }
  </div>
</div>
        
    );
};

export default Navbar;