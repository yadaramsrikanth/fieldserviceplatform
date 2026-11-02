import { Navigate, Outlet } from "react-router-dom"

function PublicRoute() {
    const token = localStorage.getItem("accessToken")
    if (token) {
        return <Navigate to="/" replace />
    }
    return <Outlet />
}

export default PublicRoute