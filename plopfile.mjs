/**
 * plopConfig
 */
export default function plopConfig(
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  // component
  plop.setGenerator('component', {
    description: 'componentのテンプレートを作成',
    prompts: [
      {
        type: 'input',
        name: 'directory',
        message: 'ディレクトリを入力してください（例：/form）'
      },
      {
        type: 'input',
        name: 'name',
        message: 'コンポーネント名を入力してください（例：Button）'
      }
    ],
    actions: [
      {
        type: 'add',
        path: './src/components{{directory}}/{{pascalCase name}}/index.tsx',
        templateFile: './.plop/component/index.tsx.hbs'
      },
      {
        type: 'add',
        path: './src/components{{directory}}/{{pascalCase name}}/index.stories.tsx',
        templateFile: './.plop/component/index.stories.tsx.hbs'
      }
    ]
  });
}