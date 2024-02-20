import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function UpdateTheory(){
    const { id } = useParams()
    const [theory, setTheory] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:3000/api/theories/${id}`)
            .then((result) => {console.log(result) 
                setTheory(result.data.theoryDetails)
            })
            .catch((err) => console.log(err));
    }, []);

    const Update = (e)=>{
        e.preventDefault();

        axios.put(`http://localhost:3000/api/theories/${id}`, {theoryDetails: theory})
        .then((result)=> {
            console.log(result)
            navigate('/')})
        .catch((err)=> console.log(err))
    }

    return(
        <div>

            <div className="update">
                <form  onSubmit={Update}>
                    <h2>Update Theory</h2>
                    <div>
                        <label htmlFor="">theory</label>
                        <input type="text" value={theory} onChange={(e)=> setTheory(e.target.value)}/>
                    </div>
                    <button type="submit">Update</button>
                </form>
            </div>

        </div>
    )

}


export default  UpdateTheory