import { CLEAR_SESSION, SET_SESSION } from '../constants/actionTypes'
import cognitoUtils from '../lib/cognitoUtils'

export const clearSession = () => ({
  type: CLEAR_SESSION
})

// Initialise the Cognito sesson from a callback href
export function initSessionFromCallbackURI (callbackHref) {
  return function (dispatch) {
    console.log('fdsfdsafsdafdsfsda',callbackHref)
    return cognitoUtils.parseCognitoWebResponse(callbackHref) // parse the callback URL
      .then(() => cognitoUtils.getCognitoSession()) // get a new session
      .then((session) => {
        dispatch({ type: SET_SESSION, session })
      })
      .catch((e)=>{
        // There was an error - redirect the user to login page?
      })
  }
}

export const setSession = session => ({
  type: SET_SESSION,
  session
})
