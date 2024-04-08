
const Register = () => {
    const handleRegister =e =>{
        e.preventDefault()
        const name =e.target.name.value
        const photo =e.target.photo.value
        const email =e.target.email.value
        const password =e.target.password.value
        const confirmPassword =e.target.confirmPassword.value
        console.log(name,photo,email,password,confirmPassword)
    }
    return (
        <div className="w-1/2 mx-auto mt-10 border px-5 py-4 rounded-md shadow-lg">
            <form onSubmit={handleRegister}>
                <div>
                    <p>Name</p>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered w-full " />
                </div>
                <div>
                    <p>Photo</p>
                    <input type="text" name="photo" placeholder="Photo" className="input input-bordered w-full " />
                </div>
                <div>
                    <p>Email</p>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered w-full " />
                </div>
                <div>
                    <p>Password</p>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered w-full " />
                </div>
                <div>
                    <p>Confirm Password</p>
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" className="input input-bordered w-full " />
                </div>
              <div className="text-center">
              <button type="submit" className="text-xl text-white font-semibold bg-sky-600 px-2 py-1 rounded-md mt-5">Register</button>
              </div>
            </form>
        </div>
    );
};

export default Register;