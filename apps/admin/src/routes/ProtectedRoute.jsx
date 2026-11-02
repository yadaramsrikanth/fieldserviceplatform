import { Navigate, Outlet } from "react-router-dom"


// If the user has a token, allow access to the dashboard.
// If the user doesn't have a token, redirect them to login.
// If an authenticated user visits /login, redirect them to the dashboard.

function ProtectedRoute() {
    const token = localStorage.getItem("accessToken")
    if (!token) {
        return <Navigate to="/login" replace />
    }
    return <Outlet />
}

export default ProtectedRoute