import {Link} from 'react-router-dom'


const Navbar = ()=>{
    return(
        <header>
            <div className="container">
                <div className="title">
                <Link to={'/'}>
                    <h1>ChronoE</h1>
                </Link>
                </div>
                
            </div>
        </header>
    )
}

export default Navbar