import { CLEAR_SESSION, SET_SESSION } from '../constants/actionTypes'
import cognitoUtils from '../lib/cognitoUtils'

export const clearSession = () => ({
  type: CLEAR_SESSION
})

// Initialise the Cognito sesson from a callback href
export function initSessionFromCallbackURI(callbackHref) {
  return function (dispatch) {
    console.log('fdsfdsafsdafdsfsda', callbackHref)
    return cognitoUtils.parseCognitoWebResponse(callbackHref) // parse the callback URL
      .then(() => cognitoUtils.getUserFromLocalStorage()) // get a new session
      .then((session) => {
        dispatch({ type: SET_SESSION, session })
      })
      .catch((e) => {
        // There was an error - redirect the user to login page?
      })
  }
}

export function initPreviousSession() {
  return function (dispatch) {
    return cognitoUtils.getCognitoSession() // get a new session
      .then((session) => {
        console.log('User signed in', session)
        dispatch({ type: SET_SESSION, session })
      })
      .catch(e =>{
        console.log('User not signed in', e)
      })
  }
}



export const setSession = session => ({
  type: SET_SESSION,
  session
})
