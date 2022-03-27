import tar from 'tar'

import getTarFiles from './get-tar-files.js'
import run from './command.js'

function unzipFile(file) {
  return tar.x({
    file: file,
    strip: 1,
    C: 'custom_node_modules',
  })
}

async function unzipNpmModules(path) {
  await run(`cd ${process.env.PWD}`)
  await run(`rm -rf ${path}`)
  await run(`mkdir ${path}`)
  const tarFiles = getTarFiles()
  const mapUnzipRequest = tarFiles.map(tarFile => {
    return unzipFile(tarFile)
  })
  await Promise.all(mapUnzipRequest)
  await run(`mv -v ${path}/node_modules/* ${path}`)
  await run(`rm -rf ${path}/node_modules/`)
  console.log('completed!')
}

export default unzipNpmModules
