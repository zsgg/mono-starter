
# 루트에 install
```bash
yarn add typescript -D -W
npx lerna clean --y && npx lerna bootstrap
```

# lerna
```bash
lerna create recipes/design
lerna add commander --scope=@zsgg/recipe-log-cli
lerna add chalk --scope=@zsgg/recipe-log-core

lerna add @zsgg/recipe-log-core --scope=@zsgg/recipe-log-cli
lerna add @zsgg/recipe-package--ui-starter --scope=@recipe/csr-react
npm link recipes/log-cli
```

# 임시 호스팅
```bash
npm install ngrok -g
ngrok http 3000
ngrok http 3001
```


