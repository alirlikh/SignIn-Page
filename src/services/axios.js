import axios from "axios"

const instance = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 5000,
  headers: {
    Accept: "application/json"
  }
})

instance.interceptors.request.use(
  (request) => {},
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
