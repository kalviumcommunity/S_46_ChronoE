import { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreateTheory(){

    const [theory, setTheory] = useState()
    const navigate = useNavigate()

    const submitForm = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:3000/api/theories/", {theoryDetails: theory})
        .then((result)=> {
            console.log(result)
            navigate('/')})
        .catch((err)=> console.log(err))

    }

    return(
        <div className="">
            <div>
                <form onSubmit={submitForm}>
                    <h1>Create TimeParadox</h1>
                    <div>
                        <input type="text" 
                        value={theory}
                        onChange={(e)=> setTheory(e.target.value)}/>
                    </div>
                    <button>Creat</button>
                </form>
            </div>
        </div>
    )

}

export default CreateTheory