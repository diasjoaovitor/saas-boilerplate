const path = require('path')

const buildCommand = (filenames) => {
  const files = filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')
  return [
    `pnpm exec prettier --write ${files}`,
    `pnpm exec next lint --fix --file ${files}`
  ]
}

module.exports = {
  '*.(j|t)s(x)?': [buildCommand]
}
