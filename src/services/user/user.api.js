import { login } from "../auth"
import { instance } from "../axios"

export const loginUser = (userData) => {
  return login({ userData })
}
export const signUpUser = (userData) => {
  return instance.post("autoServiceUser/register", userData)
}
