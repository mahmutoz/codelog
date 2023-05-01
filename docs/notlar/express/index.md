---
layout: docs
title: Express
---

# Express Giriş

Express, Node.js için geliştirilmiş, web uygulamaları ve API'ler oluşturmak için kullanılan bir framework'tür.

## Express Kurulumu

Express kurulumu için aşağıdaki komutu terminalde çalıştırabiliriz.

::: code-group
```bash [npm]
npm install express
```
```bash [yarn]
yarn add express
```
:::

## Express Kullanımı

Express kullanmak için öncelikle `express` paketini projemize dahil etmemiz gerekir.

::: code-group
```js [index.js]
const express = require('express');
```
:::

Express, bir fonksiyondur. Bu fonksiyonu çağırdığımızda, bir `app` nesnesi döndürür. Bu nesne, `listen` fonksiyonuna sahiptir. Bu fonksiyon, sunucuyu belirtilen portta dinlemeye başlar.

::: code-group
```js{3,5} [index.js]
const express = require('express');

const app = express();

const port = 3000;

app.listen(port);
```
:::

`listen` fonksiyonu; `port`, `hostname` parametreleri dışında bir `callback` fonksiyonu alabilir. Bu fonksiyon, sunucu dinlemeye başladığında çağrılır.

::: code-group
```js{3,5,7} [index.js]
const express = require('express');

const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde dinleniyor.`);
});
```
:::

## Route

Route, bir URL ve HTTP metodunu belirten bir eşleşmedir. Route'lar, `app` nesnesinin `get`, `post`, `put`, `delete` gibi fonksiyonları ile oluşturulur.


