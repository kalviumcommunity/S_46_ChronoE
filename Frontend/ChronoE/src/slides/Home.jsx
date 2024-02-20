import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [theoryHome, setTheoryHome] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/theories')
            .then((result) => setTheoryHome(result.data))
            .catch((err) => console.log(err));
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/theories/${id}`);
            setTheoryHome(theoryHome.filter(theory => theory._id !== id));
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="home">
            <div>
                <Link to="/create">E=MC^2</Link>
                <div>
                    {theoryHome.map((theory, index) => (
                        <div key={index}>
                            {theory.theoryDetails}
                            <button><Link to={`/update/${theory._id}`}>Update</Link></button>
                            <button onClick={() => handleDelete(theory._id)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
