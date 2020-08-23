# nuxt-admin

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

### 使用了mock 需要修改 `\node_modules\mockjs2\dist\mock.js` 代码
### 找到 `open()` 方法，在该方法中增加 `MockXMLHttpRequest.prototype.upload = createNativeXMLHttpRequest().upload`
