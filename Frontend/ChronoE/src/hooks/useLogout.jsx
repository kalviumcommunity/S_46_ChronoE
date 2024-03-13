import { useAuthContext } from "./useAuthContext";

export const useLogout = () =>{
    const { dispatch } = useAuthContext()

    const logout = () =>{
        localStorage.removeItem('user')

        document.cookie = '';

        dispatch({type: 'LOGOUT'})
    }

    return {logout}
}


