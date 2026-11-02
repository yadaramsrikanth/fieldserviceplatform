import { Outlet } from "react-router-dom"
import SideBar from "../components/dashboard/SideBar"
import TopHeader from "../components/dashboard/TopHeader"

function DashboardLayout() {
    return (<div className="min-h-screen bg-[#0F172A]">

        <TopHeader />

        <SideBar />

        <main className="ml-64 pt-20 min-h-screen p-6">
            <Outlet />
        </main>

    </div>)
}

export default DashboardLayout