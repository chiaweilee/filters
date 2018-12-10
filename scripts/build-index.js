const fs = require('fs')
const path = require('path')

let output = 'module.exports = {\n'

const plugins = fs.readdirSync(path.resolve('./src')).filter(
  name =>
    path.extname(name) === '.js' && ['install.js', 'index.js'].indexOf(name) === -1
)

plugins.forEach((name, i) => {
  output += `  ${name.replace('.js', '')}: require('./${name}')${i === plugins.length - 1 ? '' : ','}\n`
})

output += `}\n`

fs.writeFileSync(path.resolve('./src/index.js'), output)
