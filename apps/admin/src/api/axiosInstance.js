import axios from "axios"

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL_BACKEND,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    },

})

// Without an interceptor, you would need to manually attach the token to every protected API request.
// With an interceptor, Axios automatically attaches it.

//request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken")
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)

)

//response interceptor

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem("accessToken")
            if (window.location.pathname !== "/login") {
                window.location.replace("/login")
            }
        }
        return Promise.reject(error)
    }
)



export default axiosInstance