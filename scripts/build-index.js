const fs = require('fs')
const path = require('path')

let output = 'module.exports = {\n'

const plugins = fs.readdirSync(path.resolve('./src'))
plugins.forEach((name, i) => {
  if (path.extname(name) === '.js' && ['install.js', 'index.js'].indexOf(name) === -1) {
    output += `  ${name.replace('.js', '')}: require('./${name}')${i === plugins.length - 4 ? '' : ','}\n`
  }
})

output += `}\n`

fs.writeFileSync(path.resolve('./src/index.js'), output)
