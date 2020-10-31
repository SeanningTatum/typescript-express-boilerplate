// const { NodePlopAPI } = require('plop');

module.exports = function plopGenerator(plop) {
  // Model
  plop.setGenerator('model', {
    description: 'Create a model',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your model name? (ex: User): ',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/models/{{pascalCase name}}.ts',
        templateFile: 'plop-templates/model.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/models/_swagger_/{{pascalCase name}}.yml',
        templateFile: 'plop-templates/model.swagger.yml.hbs',
      },
    ],
  });

  //   Root Route
  plop.setGenerator('rootRoute', {
    description: 'Creates a parent route',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your rootRoute name? (ex: user): ',
      },
      {
        type: 'input',
        name: 'version',
        message: 'What version? (ex: v1, v2): ',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/api/{{lowerCase version}}/{{camelCase name}}/{{camelCase name}}.routes.ts',
        templateFile: 'plop-templates/rootRoute.ts.hbs',
      },
      {
        type: 'append',
        path: 'src/api/{{lowerCase version}}/index.routes.ts',
        pattern: '/* PLOP_INJECT_IMPORT */',
        template: 'import {{camelCase name}}Routes from \'./{{camelCase name}}/{{camelCase name}}.routes\';',
      },
      {
        type: 'append',
        path: 'src/api/{{lowerCase version}}/index.routes.ts',
        pattern: '/* PLOP_INJECT_ROUTE */',
        template: "router.use('/{{lowerCase name}}', {{camelCase name}}Routes)",
      },
    ],
  });

  //   Atom Route
  plop.setGenerator('atomRoute', {
    description: 'Creates a atomic route',
    prompts: [
      {
        type: 'input',
        name: 'rootRoute',
        message: 'What is the rootRoute name? (ex: user): ',
      },
      {
        type: 'input',
        name: 'version',
        message: 'What version? (ex: v1, v2): ',
      },
      {
        type: 'input',
        name: 'routeName',
        message: 'What is the routeName? (ex: createUser): ',
      },
      {
        type: 'list',
        name: 'method',
        choices: ['get', 'post', 'put', 'delete'],
        message: 'What HTTP method?: ',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/api/{{lowerCase version}}/{{camelCase rootRoute}}/{{camelCase routeName}}.ts',
        templateFile: 'plop-templates/atomRoute.index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/api/{{lowerCase version}}/{{camelCase rootRoute}}/_swagger_/{{camelCase routeName}}.yml',
        templateFile: 'plop-templates/atomRoute.swagger.yml.hbs',
      },
      {
        type: 'add',
        path: 'src/api/{{lowerCase version}}/{{camelCase rootRoute}}/_tests_/{{camelCase routeName}}.test.ts',
        templateFile: 'plop-templates/atomRoute.test.ts.hbs',
      },
      {
        type: 'append',
        path: 'src/api/{{lowerCase version}}/{{camelCase rootRoute}}/{{camelCase rootRoute}}.routes.ts',
        pattern: '/* PLOP_INJECT_IMPORT */',
        template: 'import {{camelCase routeName}} from \'./{{camelCase routeName}}\';',
      },
      {
        type: 'append',
        path: 'src/api/{{lowerCase version}}/{{camelCase rootRoute}}/{{camelCase rootRoute}}.routes.ts',
        pattern: '/* PLOP_INJECT_ROUTE */',
        template: "router.{{lowerCase method}}('/{{camelCase routeName}}', {{camelCase routeName}})",
      },
    ],
  });
};
