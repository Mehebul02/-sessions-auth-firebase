import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Home = () => {
    const {name} = useContext(AuthContext)
    return (
        <div>
            <h1 className='flex justify-center items-center h-screen text-2xl font-bold text-black uppercase'>My Name Is :{name}</h1>
        </div>
    );
};

export default Home;