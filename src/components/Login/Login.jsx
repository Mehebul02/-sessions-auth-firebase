
const Login = () => {
    const handleLogin =e =>{
        e.preventDefault()
        const email =e.target.email.value
        const password =e.target.password.value
        console.log(email,password)
    }
    return (
        <div className="w-1/2 mx-auto mt-10 border px-5 py-4 rounded-md shadow-lg">
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
          </div>
        </form>
    </div>
    );
};

export default Login;