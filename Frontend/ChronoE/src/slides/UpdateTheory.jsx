import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

function UpdateTheory() {
    const { id } = useParams();
    const [theory, setTheory] = useState('');
    const navigate = useNavigate();
    const { user } = useAuthContext();

    useEffect(() => {
        axios.get(`https://chronoe-time.onrender.com/api/theories/${id}`)
            .then((result) => {
                console.log(result);
                setTheory(result.data.theoryDetails);
            })
            .catch((err) => console.log(err));
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();
        if (!user) {
            alert('You should have logged in to perform this action.');
            return;
        }

        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        };

        axios.put(`https://chronoe-time.onrender.com0/api/theories/${id}`, { theoryDetails: theory }, config)
            .then((result) => {
                console.log(result);
                navigate('/');
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md">
                <form onSubmit={handleUpdate} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-2xl text-fuchsia-600 font-bold mb-4">Update Theory</h2>
                    <div className="mb-4">
                        <label htmlFor="theory" className="block text-gray-700 text-sm font-bold mb-2">Theory</label>
                        <input type="text"
                         id="theory" value={theory} 
                         onChange={(e) => setTheory(e.target.value)} 
                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                         focus:outline-none focus:shadow-outline"
                         />
                    </div>
                    <button type="submit" className="bg-fuchsia-500 hover:bg-fuchsia-700 text-white font-bold py-2 
                    px-4 rounded focus:outline-none focus:shadow-outline">Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateTheory;
