# Typescript + Express + Swagger Boilerplate

A basic starter template for strongly typed and well documented backend with express

## Libraries

- Swagger - [Docs](https://swagger.io/), [Example 1](https://github.com/Surnet/swagger-jsdoc/blob/master/docs/GETTING-STARTED.md) [Example 2](https://github.com/Surnet/swagger-jsdoc/blob/master/example/v2/routes.js)
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

### Swagger Server
Test and look at API, start development server first then  go to `/api-docs`

### Development
Watches and compiles changes into js file

```
yarn dev
```

### Server
Runs Compiled JS
```
yarn start
```

### Templates

Listed below are `plop` templates to help speed up development time. Generated code already handles types, boilerplate code and swagger definition.

Just run `npm run generate` or `yarn generate` and you'll be prompted to choose a `model`, `rootRoute` or `atomRoute`

```cli
sean@Seans-MacBook-Pro-2 express-typescript % yarn generate
? [PLOP] Please choose a generator. (Use arrow keys)
❯ model - Create a model 
  rootRoute - Creates a parent route 
  atomRoute - Creates a atomic route 

? [PLOP] Please choose a generator. model - Create a model
? What is your model name? (ex: User):  Property
✔  ++ /src/models/Property.ts

sean@Seans-MacBook-Pro-2 express-typescript % yarn generate
? [PLOP] Please choose a generator. rootRoute - Creates a parent route
? What is your rootRoute name? (ex: user):  Property
? What version? (ex: v1, v2):  v1
✔  ++ /src/api/v1/property/property.routes.ts
✔  _+ /src/api/v1/index.routes.ts
✔  _+ /src/api/v1/index.routes.ts

sean@Seans-MacBook-Pro-2 express-typescript % yarn generate
? [PLOP] Please choose a generator. atomRoute - Creates a atomic route
? What is the rootRoute name? (ex: user):  property
? What version? (ex: v1, v2):  v1
? What is the routeName? (ex: createUser):  createProperty
? What HTTP method?:  post
✔  ++ /src/api/v1/property/createProperty.ts
✔  _+ /src/api/v1/property/property.routes.ts
✔  _+ /src/api/v1/property/property.routes.ts
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)