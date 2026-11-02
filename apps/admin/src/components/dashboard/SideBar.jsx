import { NavLink } from 'react-router-dom'
import { ShieldEllipsis, LayoutDashboard, CalendarCheck, Users, HardHat, Wrench, CreditCard, Wallet, Bell, Shield, Settings } from "lucide-react";
function SideBar() {
    const menuSections = [
        {
            name: "Dashboard",
            path: "/",
            icon: LayoutDashboard
        },
        {
            name: "Bookings",
            path: "/bookings",
            icon: CalendarCheck
        },
        {
            name: "Customers",
            path: "/customers",
            icon: Users
        },
        {
            name: "Technicians",
            path: "/technicians",
            icon: HardHat
        },
        {
            name: "Services",
            path: "/services",
            icon: Wrench
        },
        {
            name: "Payments",
            path: "/payments",
            icon: CreditCard
        },
        {
            name: "Earnings",
            path: "/earnings",
            icon: Wallet
        },
        {
            name: "Notifications",
            path: "/notifications",
            icon: Bell
        },
        {
            name: "Administration(RBAC)",
            path: "/administration",
            icon: ShieldEllipsis
        },
        {
            name: "Settings",
            path: "/settings",
            icon: Settings
        }
    ]
    return (
        <aside className="fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden border-r border-[#334155] bg-[#1E293B]">

            <nav className="flex flex-col gap-2 p-4">
                {
                    menuSections.map((item) => {
                        const Icon = item.icon
                        return <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg text-md font-medium transition-colors duration-700 ease-in-out ${isActive ? "bg-[#1D4ED8] text-white" : "text-slate-400 hover:bg-[#334155] hover:text-white"}`}
                        >
                            <Icon size={18} />
                            <span>{item.name}</span>
                        </NavLink>
                    })
                }
            </nav>

        </aside>
    )
}

export default SideBar