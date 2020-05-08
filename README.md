This application was created from the create-react-app script, and demonstrates how to integrate the AWS Cognito hosted / built in sign-in and sign-up UI content with a React application. See my article [AWS Cognito example using React UI and Node.js REST APIs — part 2 (React UI app with Redux)](https://medium.com/@arron.harden/aws-cognito-example-using-react-ui-and-node-js-rest-apis-part-3-jwt-secured-rest-apis-e56d336ce306) for more information.

## Running the application

1. Modify `src/config/app-config.json` to match your user pool and application URLs. When running locally, the `signoutUri` will property need to be `http://localhost:3000/` and the `callbackUri` property will need to be `http://localhost:3000/callback`.
2. Run `npm install` to setup and install the dependencies.
3. Run `npm start` to start the application.
4. A browser session should automatically open, pointing at `http:localhost:3000`.

## JWT secured REST API service
This application will attempt to invoke a simple example REST API using the JWT access code returned in the callback from Cognito. See the repo at https://github.com/arronharden/cognito-demo-service for the implementation of this REST API. A running instance of this REST API is hosted at https://cognito-demo-api.arronharden.com. 

## Example
A running instance of this React application is hosted at https://cognito-demo.arronharden.com.

## Useful links

https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-with-identity-providers.html

https://docs.aws.amazon.com/cognito/latest/developerguide/token-endpoint.html

https://medium.com/@darutk/the-simplest-guide-to-oauth-2-0-8c71bd9a15bb

https://medium.com/@darutk/diagrams-and-movies-of-all-the-oauth-2-0-flows-194f3c3ade85




https://www.facebook.com/v6.0/dialog/oauth?client_id=276631622839048&redirect_uri=https%3A%2F%2Farundale-test-app.auth.eu-west-1.amazoncognito.com%2Foauth2%2Fidpresponse&scope=public_profile%2Cemail&response_type=code&state=ZXlKMWMyVnlVRzl2YkVsa0lqb2laWFV0ZDJWemRDMHhYM0owTURNeldFcEJieUlzSW5CeWIzWnBaR1Z5VG1GdFpTSTZJa1poWTJWaWIyOXJJaXdpWTJ4cFpXNTBTV1FpT2lJMmJuSnpOVzlwT0d4bllXeDJibXMwTUdOeWN6ZzJjalpuYmlJc0luSmxaR2x5WldOMFZWSkpJam9pYUhSMGNEb3ZMMnh2WTJGc2FHOXpkRG96TURBd0wyTmhiR3hpWVdOcklpd2ljbVZ6Y0c5dWMyVlVlWEJsSWpvaVkyOWtaU0lzSW5CeWIzWnBaR1Z5Vkhsd1pTSTZJa1poWTJWaWIyOXJJaXdpYzJOdmNHVnpJanBiSW1WdFlXbHNJaXdpYjNCbGJtbGtJbDBzSW5OMFlYUmxJanB1ZFd4c0xDSmpiMlJsUTJoaGJHeGxibWRsSWpwdWRXeHNMQ0pqYjJSbFEyaGhiR3hsYm1kbFRXVjBhRzlrSWpwdWRXeHNMQ0p1YjI1alpTSTZJakp2YlVKeWNtcGpWbEUyYW5OeWVHWm1kRkZLWm01VlpHRlBRMmR3WnpWeloyeGhkMG81VnpKalpVbDFORTVLTld4d09IZHZlVUUyTmprM2JEVkRVbkJRTUMwM1l6aFhiM05QY2xwS2JWaEpVME15UnpWU1N6RnFZMFpZTlVKaWNFVnFhbXg0UWxCSGNEbE1hbXBmWjB4NVNsWjFUMUp6U3pWUmVIY3RMVFpuUlRVNFQzb3RPVFJCVmpack0wZFVWVTk0UTNOelJsZ3hhbkEwUlVwWlFXRkRPVlpJWjBSSlVYaEJWU0lzSW5ObGNuWmxja2h2YzNSUWIzSjBJam9pWVhKMWJtUmhiR1V0ZEdWemRDMWhjSEF1WVhWMGFDNWxkUzEzWlhOMExURXVZVzFoZW05dVkyOW5ibWwwYnk1amIyMGlMQ0pqY21WaGRHbHZibFJwYldWVFpXTnZibVJ6SWpveE5UZzRPRGt4TmprNUxDSnpaWE56YVc5dUlqcHVkV3hzTENKMWMyVnlRWFIwY21saWRYUmxjeUk2Ym5Wc2JDd2lhWE5UZEdGMFpVWnZja3hwYm10cGJtZFRaWE56YVc5dUlqcG1ZV3h6WlN3aVptRmpaV0p2YjJ0V1pYSnphVzl1SWpvaWRqWXVNQ0o5OnpZTlhBMi9TSXd1WmVyczY1NkVoV1h3bjcvcjYxbHhzRkRnblpUV3RpOWM9OjI%3D