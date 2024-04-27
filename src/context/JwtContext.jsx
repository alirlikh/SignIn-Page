const { createContext, useReducer } = require("react")
import ACCOUNTT_INITIALISE from "../store/action"

export const JwtContext = createContext(undefined)

const JWTProvider = ({ Children }) => {
  const initiaState = {
    isLogged: false
  }

  const reducer = (state, action) => {
    const { type } = action.type
    switch (type) {
      case ACCOUNTT_INITIALISE:
        return {
          ...state,
          isLogged: false
        }
        break

      default:
        break
    }
  }

  const [state, dispatch] = useReducer(reducer, initiaState)

  return <JwtContext.Provider value={{ ...state }}>{Children}</JwtContext.Provider>
}

export default JWTProvider
