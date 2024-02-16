// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home(){

    // useEffect(()=>{
    // },[])


    return(
        <div className="home">
            <div>
                <Link to="/create">E=MC^2</Link>
            </div>
        </div>
    )

}