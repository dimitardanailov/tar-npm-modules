# tar-npm-modules

The project uses [tar](https://www.npmjs.com/package/tar)

The project could be useful if you want to store npm modules in your source
control system. The project uses a storage: `./modules`.

Example:

```javascript
import {tarNpmFolders} from 'tar-npm-modules'
;(async () => {
  await tarNpmFolders()
})()
```
