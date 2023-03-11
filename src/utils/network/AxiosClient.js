import axios from "axios";

export const HTTP_OK = 200
export const HTTP_CREATED = 201
export const HTTP_UNPROCESSABLE_ENTITY = 422

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

axiosClient.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    const { response } = error
    return response
  }
)

export default axiosClient

