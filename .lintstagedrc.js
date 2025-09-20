const path = require('path')

const buildCommand = (filenames) => {
  const files = filenames.map((f) => path.relative(process.cwd(), f))
  return [
    `npx prettier --write ${files.join(' --file ')}`,
    `npx next lint --fix --file ${files.join(' --file ')}`,
    `npx jest --runInBand --findRelatedTests ${files.join(' ')} --passWithNoTests`
  ]
}

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildCommand]
}
