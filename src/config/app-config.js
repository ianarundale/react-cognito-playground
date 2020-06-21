console.log(process.env.AWS_REGION)

let appConfig = {
    "region": 'eu-west-1',
    "userPool": 'eu-west-1_rt033XJAo',
    "userPoolBaseUri": 'https://arundale-test-app.auth.eu-west-1.amazoncognito.com',
    "clientId": '6nrs5oi8lgalvnk40crs86r6gn',
    "callbackUri": "http://localhost:3000/callback",
    "signoutUri": "http://localhost:3000",
    "tokenScopes": [
        "openid",
        "email"              
    ],
    "apiUri": "http://localhost:3010"
}

export default appConfig