# tar-npm-modules

The project uses [tar](https://www.npmjs.com/package/tar). tar-npm-modules as a
project could be helpful if you want npm modules to be stored in the source
control system. The project uses a storage: `./modules`.

### Compress npm modules

```javascript
import {tarNpmFolders} from 'tar-npm-modules'
;(async () => {
  await tarNpmFolders()
})()
```

### Decompression

```javascript
import {unzipNpmModules} from 'tar-npm-modules'
;(async () => {
  const path = './custom_node_modules'
  unzipNpmModules(path)
})()
```
