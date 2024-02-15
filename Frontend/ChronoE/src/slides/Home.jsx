import { useEffect, useState } from "react";

export default function Home(){
    const [theorie, setTheories] = useState(null)

    useEffect(()=>{
        const fetchTheories = async ()=>{
            const response = await fetch ('http://localhost:3000/api/theories')
            const json = await response.json()
            console.log(json)
            if (response.ok){
                setTheories(json)
            }
        }
        fetchTheories()
    },[])


    return(
        <div className="home">
            <h2>Home</h2>
            <div className="theories">
                {theorie && theorie.map((theories)=>(
                    <p key={theories._id}>{theories.theoryDetails}</p>
                ))}
            </div>
        </div>
    )

}