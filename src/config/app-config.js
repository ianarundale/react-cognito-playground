console.log(process.env.AWS_REGION)

let appConfig = {
    "region": process.env.AWS_REGION,
    "userPool": process.env.USER_POOL,
    "userPoolBaseUri": process.env.USER_POOL_BASE_URI,
    "clientId": process.env.CLIENT_ID,
    "callbackUri": "http://localhost:3000/callback",
    "signoutUri": "http://localhost:3000",
    "tokenScopes": [
        "openid",
        "email"              
    ],
    "apiUri": "http://localhost:3010"
}

export default appConfig