import instance from "../services/axios"

const tokenName = "token"

const setToken = (tokenId) => {
  localStorage.setItem(tokenName, tokenId)
}

export const getToken = () => {
  localStorage.getItem(tokenName)
}

export const login = async (data) => {
  try {
    const data = await instance.post("auth/userlogin", data)
    setToken(data.token)
    window.location.href = "/"
  } catch (error) {
    console.log(error)
    return error
  }
}
