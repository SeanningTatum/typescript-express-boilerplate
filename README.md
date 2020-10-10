# Typescript + Express + Swagger Boilerplate

A basic starter template for strongly typed and well documented backend with express

## Libraries

- Swagger - [Docs](https://swagger.io/), [Examples](https://github.com/Surnet/swagger-jsdoc/blob/master/docs/GETTING-STARTED.md)
- Typescript - [Docs](https://www.typescriptlang.org/docs/)
- Express - [Docs](https://expressjs.com/)
- Express Validator - [Docs](https://express-validator.github.io/docs/)
- http-status-codes - [Docs](https://www.npmjs.com/package/http-status-codes)

## Features

- Strongly Typed Requests and Responses through `typescript`
- Reusable Documented Models through `typescript` and `swagger`
- Documented APIs that can be easily tested at `/api-docs` through `swagger`
- Reusable and generic HTTP status codes and messages through `http-status-codes`
- Validate Route Params and Body through `express-validator`

```javascript
├── api
│   └── v1
│       ├── index.routes.ts // root routes
│       └── user // modularize routes into own files
            //define request, response types, dto, swagger doc and logic inside each route
│           ├── createUser.ts 
│           ├── getUser.ts
│           └── user.routes.ts // user root routes
├── config
│   └── swagger.ts
├── index.ts
├── models 
│   └── User.ts // swagger and type definition 
```

## Setup

run `npm install` or `yarn install`

Make sure you have `nodemon` install globally

*Dev*
Watches and compiles changes into js file

```
yarn dev
```

*Server*
Runs Compiled JS
```
yarn start
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)