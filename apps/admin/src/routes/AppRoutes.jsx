import { Routes, Route } from "react-router-dom"

import LoginPage from "../features/auth/pages/LoginPage"
import DashBoard from "../features/dashboard/pages/DashBoard"

function AppRoutes() {
    return <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
}

export default AppRoutes