import { useState } from "react";
import axios from "axios";
import { useTheoryContext } from './useTheoryContext';

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useTheoryContext()

    const signup = async (email, password) => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await axios.post('http://localhost:3000/api/user/signup', {
                email,
                password
            });

            const { data: json, headers } = response;
            const token = headers['set-cookie']; // Get the token from the response headers

            // Set cookie
            document.cookie = token;

            localStorage.setItem('user', JSON.stringify(json))

            dispatch({ type: 'LOGIN', payload: json })

            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            setError(error.response.data.error)
        }
    }
    return { signup, isLoading, error }
}
