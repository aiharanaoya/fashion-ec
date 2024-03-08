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
  // page
  plop.setGenerator('page', {
    description: 'pageのテンプレートを作成',
    prompts: [
      {
        type: 'input',
        name: 'directory',
        message: 'ディレクトリを入力してください（例：/my-page）'
      }
    ],
    actions: [
      {
        type: 'add',
        path: './src/app{{directory}}/page.tsx',
        templateFile: './.plop/page/page.tsx.hbs'
      }
    ]
  });
  // hook
  plop.setGenerator('hook', {
    description: 'hookのテンプレートを作成',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'hook名を入力してください（例：useProduct）',
        validate: (value) => {
          if (!value.startsWith('use')) {
            return 'hook名は先頭にuseを付けるようにしてください';
          }
          return true;
        }
      }
    ],
    actions: [
      {
        type: 'add',
        path: './src/hooks/{{camelCase name}}.ts',
        templateFile: './.plop/hook/index.ts.hbs'
      }
    ]
  });
}
