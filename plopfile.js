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
        path: 'src/api/{{lowerCase version}}/{{camelCase name}}/{{camelCase name}}.routes.ts',
        pattern: '/* PLOP_INJECT_IMPORT */',
        template: 'import {{camelCase name}}Routes from \'./{{camelCase name}}/{{camelCase name}}.routes\';',
      },
      {
        type: 'append',
        path: 'src/api/{{lowerCase version}}/{{camelCase name}}/{{camelCase name}}.routes.ts',
        pattern: '/* PLOP_INJECT_ROUTE */',
        template: "router.use('/{{lowerCase name}}', {{camelCase userRoutes}})",
      },
    ],
  });

//   Atom Route
};
