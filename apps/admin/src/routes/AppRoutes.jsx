import { Routes, Route } from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute"
import PublicRoute from "./PublicRoute"
import DashboardLayout from "../layout/DashboardLayout"

import LoginPage from "../features/auth/pages/LoginPage"
import DashBoard from "../features/dashboard/pages/DashBoard"

function AppRoutes() {
    return <Routes>

        {/* public Routes */}
        <Route element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
        </Route>

        {/* protected routes */}
        <Route element={<ProtectedRoute />}>
            <Route element={<DashboardLayout />}>
                <Route path="/" element={<DashBoard />} />
            </Route>
        </Route>



    </Routes>
}

export default AppRoutes