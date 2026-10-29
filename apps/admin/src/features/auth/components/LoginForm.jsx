import { Mail, Lock } from "lucide-react"


function LoginForm() {
    return <div className="w-full min-h-screen bg-[#0F172A] bg-[radial-gradient(ellipse_at_center,_#334155_0%,_#0F172A_70%)] flex items-center justify-center">
        <form className="flex flex-col bg-[#1E293B] min-h-[400px] w-[500px] border-[#334155] border-2 rounded-3xl opacity-100 p-10">
            <h1 className="text-[#F8FAFC] font-black text-4xl text-center">FieldForce</h1>
            <h4 className="text-[#94A3BB] font-medium text-md text-center">Administrator Security Portal</h4>
            <div className="mt-10 flex flex-col">
                <label className="text-[#94A3B8] text-md ">Admin Email Address</label>
                <div className="relative w-full">
                    <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/3 text-slate-400" />
                    <input type="email" placeholder="Enter Email Address" className="w-full pl-10  bg-[#0F172A] px-2 py-2 rounded-lg mt-2 border border-[#334155] outline-none focus:outline-none placeholder:text-slate-400 text-slate-200" />

                </div>
            </div>
            <div className="mt-2 flex flex-col">
                <div className="flex items-center justify-between">
                    <label className="text-[#94A3B8] text-md ">Password</label>
                    <p className="text-[#1D4ED8] text-sm font-normal">Forgot Password?</p>
                </div>
                <div className="relative w-full">
                    <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/3 text-slate-400" />
                    <input type="password" placeholder="Enter Password" className="w-full pl-10 bg-[#0F172A] px-2 py-2 rounded-lg mt-2 border border-[#334155] outline-none focus:outline-none placeholder:text-slate-400 text-slate-200" />

                </div>
            </div>
            <button className="text-[#F8FAFC] text-md font-semibold bg-[#3B82F6] p-2 rounded-lg mt-5">Sign Into Admin Dashboard</button>
        </form>
    </div>
}

export default LoginForm