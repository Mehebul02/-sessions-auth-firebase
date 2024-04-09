import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Home = () => {
    const {name} = useContext(AuthContext)
    return (
        <div >
            
            <a className='flex justify-center items-center h-screen text-2xl font-bold text-black uppercase'>আমাকে ক্লিক করলে তোমাকে ইদ মোবারোক জানানো হবে{name}</a>
        </div>
    );
};

export default Home;