import { useState } from "react";
import { useLogin } from "../hooks/useLogin";


const Login = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    const handleSubmit = async (e) =>{
        e.preventDefault()

        await login(email, password)
    }


    return(
        <div className="flex justify-center items-center drop-shadow-2xl">
    <form className="Login flex flex-col items-centerbg-white p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <h3 className="text-white text-lg font-bold mb-6">Login</h3>
        <label className="text-white">Email:</label>
        <input
            type="email"
            className="input-style border border-white-500 rounded-md px-4 py-2 mt-2 w-full"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
        />
        <label className="text-white mt-4">Password:</label>
        <input
            type="password"
            className="input-style border border-white-500 rounded-md px-4 py-2 mt-2 w-full"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
        />
        <button
            disabled={isLoading}
            className="btn mt-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-800 transition duration-300 ease-in-out"
        >
            Login
        </button>
        {error && <div className="text-red-500 mt-4">{error}</div>}
    </form>
</div>



    )

}

export default Login