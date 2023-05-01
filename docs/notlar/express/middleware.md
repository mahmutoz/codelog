---
layout: docs
title: Middleware
---

# Middleware

Middleware, bir uygulamanın gelen istekleri işlemek için kullandığı fonksiyonlardır. Middleware'ler, gelen istekleri işlemek için kullanıldığı gibi, giden cevapları işlemek için de kullanılabilir.

## Middleware Kullanımı

Middleware'ler, `app.use` fonksiyonu ile kullanılır. Bu fonksiyon, bir `path` ve bir `callback` fonksiyonu alır. `path` parametresi, middleware'in hangi isteklerde çalışacağını belirtir. `callback` fonksiyonu, middleware'in çalışma mantığını içerir.

::: code-group
```js [index.js]
const express = require('express');

const app = express();
const port = 3000;

app.use('/', (req, res, next) => {
  console.log('Middleware çalıştı.');
  next();
});

app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde dinleniyor.`);
});
```
:::

## Middleware Sırası

Middleware'ler, `app.use` fonksiyonu ile kullanıldıkları sırayla çalışırlar. Örneğin, aşağıdaki örnekte, `middleware1` fonksiyonu, `middleware2` fonksiyonundan önce çalışır.

::: code-group
```js [index.js]
const express = require('express');

const app = express();
const port = 3000;

app.use('/', (req, res, next) => {
  console.log('middleware1 çalıştı.');
  next();
});

app.use('/', (req, res, next) => {
  console.log('middleware2 çalıştı.');
  next();
});

app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde dinleniyor.`);
});
```
:::

## Middleware'lerde `next` Fonksiyonu

Middleware'lerde `next` fonksiyonu, bir sonraki middleware'i çalıştırmak için kullanılır.

Eğer `next` fonksiyonuna parametre eklersek bu parametre, sonraki middleware'e hata olarak gönderilir. Bu sayede, hata yakalama middleware'i çalıştırılabilir.

::: code-group
```js [index.js]
const express = require('express');

const app = express();
const port = 3000;

app.use('/', (req, res, next) => {
  console.log('middleware1 çalıştı.');
  next();
});

app.use('/', (req, res, next) => {
  console.log('middleware2 çalıştı.');
  next('İçerik bulunamadı.');
});

app.use('/', (err, req, res, next) => {
  console.log("Hata yakalama middleware'i çalıştı. Hata mesajı: ", err);
  next();
});

app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde dinleniyor.`);
});
```
:::
