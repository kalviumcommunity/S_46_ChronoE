import {Link} from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'


const Navbar = ()=>{
    const {logout} = useLogout()
    const {user} = useAuthContext()

    const handleClick = () =>{
        logout()
    }



    return(
        <header className="bg-white shadow-lg mb-8">
            <div className="container mx-auto flex items-center justify-between py-4 px-8">
                    <h1 className="text-2xl font-bold"><Link to={'/'} className="text-fuchsia-600 no-underline">ChronoE</Link></h1>
                <nav>
                    {user && (
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-600">{user.email.split("@")[0]}</span>
                            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded
                             focus:outline-none focus:ring-2 focus:ring-red-500" onClick={handleClick}>Log Out</button>
                        </div>
                    )}
                    {!user && (          
                        <div className="flex items-center space-x-4">
                           <button className="bg-fuchsia-600 hover:bg-fuchsia-500 text-white px-4 py-2 rounded
                            focus:outline-none focus:ring-2 focus:ring-blue-500"><Link to={'/login'} 
                            className="no-underline text-white">Login</Link></button>
                            <button className= "bg-fuchsia-600 hover:bg-fuchsia-500 px-4 py-2 rounded">
                                <Link to={'/signup'} className="no-underline text-white">SignUp</Link></button> 
                    </div>
                    )}
                </nav>
                
            </div>
        </header>
    )
}

export default Navbar