import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <div className="flex justify-center items-center h-96">
      <form className="Login flex flex-col items-center bg-black p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
      <h3 className="text-white text-lg font-bold mb-6">Signup</h3>
      <label className="text-white">Email:</label>
      <input
        type="email"
        className="input-style border border-gray-500 rounded-md px-4 py-2 mt-2 w-full"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password:</label>
      <input
        type="password"
        className="input-style border border-gray-500 rounded-md px-4 py-2 mt-2 w-full"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button disabled={isLoading}
      className="btn mt-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-800 transition duration-300 ease-in-out"
      >SignUp</button>
      {error && <div className="text-red-500 mt-4">{error}</div>}
    </form>
    </div>

  );
};

export default Signup;
