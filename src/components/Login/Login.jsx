import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const {loginUser,googleLogin} = useContext(AuthContext)
    const handleLogin =e =>{
        e.preventDefault()
        const email =e.target.email.value
        const password =e.target.password.value
        console.log(email,password)
        loginUser()
        .then( result=>{
            console.log('Successfully',result.user)
           
        }
    
    )
        .catch(error =>{
            console.log(error)
        })
    }
    const handleGooglelogin =()=>{
        googleLogin()
        .then(result =>{
            console.log(result.user)

        })
        .catch(error => console.log(error))
    }
    return (
        <div className="w-1/2 mx-auto mt-10 border px-5 py-4 rounded-md shadow-lg min-w-[300px]">
        <form onSubmit={handleLogin}>
            
            <div>
                <p>Email</p>
                <input type="email" name="email" placeholder="Email" className="input input-bordered w-full " />
            </div>
            <div>
                <p>Password</p>
                <input type="password" name="password" placeholder="Password" className="input input-bordered w-full " />
            </div>
            
          <div className="text-center">
          <button type="submit" className="text-xl text-white font-semibold bg-sky-600 px-2 py-1 rounded-md mt-5">Login</button>
          <button onClick={handleGooglelogin} className="btn btn-ghost text-xl ml-2">Google</button>
          
          
          </div>
        </form>
    </div>
    );
};

export default Login;