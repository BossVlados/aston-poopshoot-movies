import { Navigate, Outlet } from 'react-router-dom'
import { ACCESS_TOKEN, Paths } from '../constants'


const useAuth = () => {
    const token = localStorage.getItem(ACCESS_TOKEN)

    if (token) {
        return true
    }
    else { return false }
}

export const PublicRoutes = () => {
    const auth = useAuth();
    return auth ? <Navigate to={Paths.MAIN} /> : <Outlet />
}