const path = require('path')

const buildCommand = (filenames) => {
  const files = filenames.map((f) => path.relative(process.cwd(), f))
  return [
    `pnpm exec prettier --write ${files.join(' --file ')}`,
    `pnpm exec eslint --fix ${files.join(' ')}`
  ]
}

module.exports = {
  '*.(j|t)s(x)?': [buildCommand]
}
