import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

function Home() {
    const [theoryHome, setTheoryHome] = useState([]);
    const [users, setUsers] = useState([]);
    const [selected, setSelected] = useState("all"); 
    const { user } = useAuthContext();

    const TheoryFilter = theoryHome.filter((item) => {
        if(selected === 'all') {
            return item;
        } else {
            return item.user_id === selected; 
        }
    });

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("https://chronoe-time.onrender.com/api/user/users");
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);
    
    console.log(user._id)

    useEffect(() => {
        const fetchTheories = async () => {
            try {
                const response = await axios.get('https://chronoe-time.onrender.com/api/theories', {
                    headers: {
                        Authorization: `Bearer ${user.token}`
                    }
                });
                setTheoryHome(response.data);
            } catch (error) {
                console.error("Error fetching theories:", error);
            }
        };

        if (user && user.token) {
            fetchTheories();
        }
    }, [user]);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://chronoe-time.onrender.com/api/theories/${id}`, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            });
            setTheoryHome(theoryHome.filter(theory => theory._id !== id));
        } catch (error) {
            console.error("Error deleting theory:", error);
        }
    };

    
    

    return (
        <div className="home bg-black text-white min-h-screen flex flex-col justify-center items-center">
            <div className="container mx-auto py-8">
                <button className="bg-transparent border border-white text-white px-4 py-2 rounded-md mb-4"><Link to="/create">E=MC^2</Link></button>

                <select name='user' onChange={(e) => setSelected(e.target.value)} className=" bg-black border border-white ml-4  text-white rounded">
                  <option value='all' className="text-white">ALL</option>
                  {users && users.map((user) => (
                    <option key={user._id} value={user._id} className="text-white">{user.email.split("@")[0]}</option>
                  ))}
                </select>
                <div className="grid grid-cols-1 gap-4">
                {TheoryFilter.map((theory, index) => (
                    <div key={index} className="bg-gray-800 p-4 rounded-md">
                        <p className="text-lg font-bold mb-2">{theory.theoryDetails}</p>
                        {theory.user_id === users.filter(p => p.email===user.email)[0]._id &&
                            <>
                                <button className="bg-transparent border border-white text-white px-4 py-2 rounded-md mr-2"><Link to={`/update/${theory._id}`}>Update</Link></button>
                                <button onClick={() => handleDelete(theory._id)} className="bg-transparent border border-white text-white px-4 py-2 rounded-md">Delete</button>
                            </>
                        }
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default Home;


