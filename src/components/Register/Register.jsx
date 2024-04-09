import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
// import { useNavigate } from "react-router-dom";
const Register = () => {
    const {user,setUser,registerUser} = useContext(AuthContext)
    // const navigate = Navigate()
    // const navigate = useNavigate();
    const [passwordError,setPasswordError] = useState('')
    const [success , setSuccess] = useState('')
    const [emailError,setEmailError] =useState('')
    const handleRegister =e =>{
        e.preventDefault()
        const name =e.target.name.value
        const photo =e.target.photo.value
        const email =e.target.email.value
        const password =e.target.password.value
        const confirmPassword =e.target.confirmPassword.value
        console.log(name,photo,email,password,confirmPassword)
        if(!/@gmail\.com$/.test(email)){
            setEmailError('Email must end with @gmail.com')
            return;


        }
        if(password === ''){
            setPasswordError('Please Enter the password')
            return
        }
       if(password.length <6){
            setPasswordError('Password must bre 6 characters')
            return;
        }
        if(password !== confirmPassword){
          setPasswordError('Password Dont match')
            return;

        } 
        if (!/\d{2,}$/.test(password)){
            setPasswordError('Password must end  with at least 2 number')
            return;
        }
        if(!/[$@$!%*?&]/.test(password)){
            setPasswordError('Please add special character like $,@,!,%,?,&')
            return;
        }
        setPasswordError('')
        setSuccess('')
        setEmailError('')
        // conditon
        registerUser(email,password)
        .then(result =>{
            console.log(result.user)
            setUser(result.user)
            e.target.reset()
            // navigate('/login')
            setSuccess('Register Successfully')
        })
        .catch(error =>{
            console.log(error)
            setUser(error.massage)
        })
    }
    return (
        <div className="w-1/2 mx-auto mt-10 border px-5 py-4 rounded-md shadow-lg min-w-[300px]">
            <form onSubmit={handleRegister}>
                <div>
                <div className="text-center">
                    {
                        user && <p className="text-2xl text-red-600">{user}</p>
                    }
                {
                    emailError && <p className="text-yellow-600">{emailError}</p>
                }
                    {
                        success && <p className="text-green-800">{success}</p>
                    }
                {
                passwordError && <p className="text-amber-600">{passwordError}</p>
            }
                </div>
                    <p>Name</p>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered w-full " />
                </div>
                <div>
                    <p>Photo</p>
                    <input type="text" name="photo" placeholder="Photo" className="input input-bordered w-full " />
                </div>
                <div>
                    <p>Email</p>
                    <input type="email" name="email" required placeholder="Email" className="input input-bordered w-full " />
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