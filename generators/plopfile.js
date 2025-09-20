const fs = require('fs')
const path = require('path')

const indexPath = path.resolve(__dirname, '../src/app/components/index.ts')

module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/app/components/{{kebabCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/app/components/{{kebabCase name}}/{{kebabCase name}}.test.tsx',
        templateFile: 'templates/test.tsx.hbs'
      },
      () => {
        if (!fs.existsSync(indexPath)) {
          const dir = path.dirname(indexPath)
          fs.mkdirSync(dir, { recursive: true })
          fs.writeFileSync(indexPath, '')
        }
      },
      {
        type: 'append',
        path: '../src/app/components/index.ts',
        template: "export * from './{{kebabCase name}}'"
      },
      () => {
        const content = fs.readFileSync(indexPath, 'utf-8')
        const lines = content.split('\n')
        const updatedContent =
          lines
            .filter((line) => line.trim() !== '')
            .sort()
            .join('\n') + '\n'
        fs.writeFileSync(indexPath, updatedContent)
      }
    ]
  })
}
