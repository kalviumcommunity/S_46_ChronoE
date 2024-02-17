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

    return (
        <div className="home">
            <div>
                <Link to="/create">E=MC^2</Link>
                <div>
                    {theoryHome.map((theory, index) => (
                        <div key={index}>
                            {theory.theoryDetails}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
