import axiosInstance from "../../../api/axiosInstance"
import { ENDPOINTS } from "../../../api/endPoints"


//admin dashboard login api
export const adminLogin = async (credentials) => {
    const response = await axiosInstance.post(
        ENDPOINTS.AUTH.LOGIN, credentials
    )
    return response.data
}