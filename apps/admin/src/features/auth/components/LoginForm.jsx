import { useState } from "react"
import { Mail, Lock, Shield, } from "lucide-react"
import { adminLogin } from '../api/authapi'
import { useNavigate } from "react-router-dom"

function LoginForm() {
    const [formData, setFormData] = useState({ email: "", password: "" })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const navigate = useNavigate()
    //handling inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        setLoading(true)
        try {
            const response = await adminLogin(formData)
            console.log("login successful", response)
            // clear form data
            localStorage.setItem("accessToken", response.data.accessToken)
            setFormData({ email: "", password: "" })

            //navifate to dashboard
            navigate("/")

        } catch (error) {
            setError(error.response?.data.error || "Login failed try again")
        } finally {
            setLoading(false)
        }
    }

    return <div className="w-full min-h-screen bg-[#0F172A] bg-[radial-gradient(ellipse_at_center,_#334155_0%,_#0F172A_70%)] flex items-center justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col bg-[#1E293B] min-h-[400px] w-[500px] border-[#334155] border-2 rounded-3xl opacity-100 p-10">
            <div className="flex items-center justify-center mb-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600">
                    <Shield size={24} className="text-white" />
                </div>
            </div>
            <h1 className="text-[#F8FAFC] font-extrabold text-3xl text-center">FieldForce</h1>
            <h4 className="text-[#94A3BB] font-medium text-md text-center">Administrator Security Portal</h4>
            <div className="mt-10 flex flex-col">
                <label className="text-[#94A3B8] text-md ">Admin Email Address</label>
                <div className="relative w-full">
                    <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/3 text-slate-400" />
                    <input required onChange={handleInputChange} name="email" value={formData.email} type="email" placeholder="Enter Email Address" className="w-full pl-10  bg-[#0F172A] px-2 py-2 rounded-lg mt-2 border border-[#334155] outline-none focus:outline-none placeholder:text-slate-400 text-slate-200" />

                </div>
            </div>
            <div className="mt-2 flex flex-col">
                <div className="flex items-center justify-between">
                    <label className="text-[#94A3B8] text-md ">Password</label>
                    <p className="text-[#1D4ED8] text-sm font-normal">Forgot Password?</p>
                </div>
                <div className="relative w-full">
                    <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/3 text-slate-400" />
                    <input required onChange={handleInputChange} name="password" value={formData.password} type="password" placeholder="Enter Password" className="w-full pl-10 bg-[#0F172A] px-2 py-2 rounded-lg mt-2 border border-[#334155] outline-none focus:outline-none placeholder:text-slate-400 text-slate-200" />

                </div>
            </div>
            {/* error */}
            {error && <p className="text-sm text-red-500">{error}</p>}
            <button disabled={loading} type="submit" className="text-[#F8FAFC] text-md font-semibold bg-[#3B82F6] p-2 rounded-lg mt-5">{loading ? "Signing in..." : "Sign into Admin Dashboard"}</button>
        </form>
    </div>
}

export default LoginForm