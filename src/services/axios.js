import axios from "axios"
import { getToken } from "./auth"

export const instance = axios.create({
  baseURL: "http://localhost:3005/api/",
  timeout: 50000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})

instance.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      Authorization: getToken()
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.status === 401) {
      return Promise.reject(error)
    }
  }
)
