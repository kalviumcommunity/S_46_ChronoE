import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from "../hooks/useAuthContext";

function CreateTheory() {
    const [theory, setTheory] = useState('');
    const navigate = useNavigate();
    const { user } = useAuthContext();

    const submitForm = async (e) => {
        e.preventDefault();

        if (!user) {
            alert('You should have logged in');
            return;
        }
        
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            };

            const response = await axios.post("https://chronoe-time.onrender.com/api/theories/", { theoryDetails: theory }, config);
            console.log(response);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex justify-center items-center h-4/5">
            <div className="w-full max-w-md">
                <form onSubmit={submitForm} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h1 className="text-2xl text-fuchsia-600 font-bold mb-4">Create TimeParadox</h1>
                    <div className="mb-4">
                        <input type="text" 
                            value={theory}
                            onChange={(e) => setTheory(e.target.value)}
                            className="shadow appearance-none border rounded
                             w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"    
                        />
                    </div>
                    <button className="bg-fuchsia-500 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded 
                    focus:outline-none focus:shadow-outline">Create</button>
                </form>
            </div>
        </div>
    )
}

export default CreateTheory;

