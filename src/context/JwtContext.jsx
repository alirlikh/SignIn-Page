import { getProfile } from "../services/auth.js"
import { ACCOUNT_INITIALISE, LOGIN, LOGOUT } from "../store/action.js"
import { tokenName } from "../services/auth.js"
const { createContext, useReducer, useEffect } = require("react")

const initiaState = {
  isLogged: false,
  isInitialised: false,
  user: null
}
export const JwtContext = createContext({
  ...initiaState
})

const verifyToken = (serviceToken) => {
  if (!serviceToken) {
    return false
  }
}

const JWTProvider = ({ children }) => {
  const reducer = (state, action) => {
    const { type } = action.type
    switch (type) {
      case ACCOUNT_INITIALISE: {
        const { isLoggedIn, user } = action.payload
        return {
          ...state,
          isLoggedIn,
          isInitialised: true,
          user
        }
      }
      case LOGIN: {
        const { user } = action.payload
        return {
          ...state,
          isLoggedIn: true,
          user
        }
      }
      case LOGOUT: {
        return {
          ...state,
          isLoggedIn: false,
          user: null
        }
      }
      default: {
        return { ...state }
      }
    }
  }

  const [state, dispatch] = useReducer(reducer, initiaState)

  const jwtInitialise = async () => {
    try {
      const serviceToken = window.localStorage.getItem(tokenName)
      if (serviceToken && verifyToken(serviceToken)) {
        const user = getProfile()
        if (user.userId) {
          dispatch({
            type: ACCOUNT_INITIALISE,
            payload: {
              isLoggedIn: true,
              user
            }
          })
        } else {
          dispatch({
            type: ACCOUNT_INITIALISE,
            payload: {
              isLoggedIn: false,
              user: null
            }
          })
        }
      } else {
        dispatch({
          type: ACCOUNT_INITIALISE,
          payload: {
            isLoggedIn: false,
            user: null
          }
        })
      }
    } catch (err) {
      console.error(err)
      dispatch({
        type: ACCOUNT_INITIALISE,
        payload: {
          isLoggedIn: false,
          user: null
        }
      })
    }
  }

  useEffect(() => {
    jwtInitialise()
  }, [])

  return <JwtContext.Provider value={{ ...state }}>{children}</JwtContext.Provider>
}

export default JWTProvider
