import { Search, Bell, LogOut, UserRound } from "lucide-react"
import { useNavigate } from "react-router-dom"

function TopHeader() {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("accessToken")
        navigate("/login", { replace: true })
    }

    return (
        <header className="fixed top-0 left-0 z-50 h-16 w-full bg-[#1E293B] border-b border-[#334155]">
            <div className="grid grid-cols-3 h-full items-center px-6">
                {/* left:global search */}
                <div className="flex items-center">
                    <div className="relative w-80">
                        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input type="text" placeholder="Search anything..."
                            className="w-full h-8 rounded-lg border-2 border-[#334155] bg-[#0F172A] pl-10 pr-4 text-sm text-white outline-none placeholder:text-slate-500"
                        />
                    </div>
                </div>

                {/* Center:logo */}
                <div className="flex items-center justify-center">
                    <h1 className="text-3xl text-white font-bold tracking-wider">FSP <span className="text-indigo-400">ADMIN</span></h1>
                </div>

                {/* Right:Action and Profile */}
                <div className="flex items-center justify-end gap-5">
                    {/* Notifications */}
                    <div className="relative cursor-pointer text-slate-300 hover:text-white">
                        <Bell size={21} />

                        <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-[#1E293B] bg-red-500" />
                    </div>


                    {/* Profile */}
                    <div className="flex items-center gap-3 border-l border-[#334155] pl-5">

                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600">
                            <UserRound size={19} className="text-white" />
                        </div>

                        <div className="flex flex-col">
                            <span className="text-sm font-semibold text-white">
                                Admin User
                            </span>

                            <span className="text-xs text-slate-400">
                                Super Admin
                            </span>
                        </div>

                    </div>
                    <button
                        type="button"
                        onClick={handleLogout}
                        title="Logout"
                        className="text-slate-300"
                    >
                        <LogOut size={21} />
                    </button>
                </div>

            </div>
        </header>
    )
}


export default TopHeader