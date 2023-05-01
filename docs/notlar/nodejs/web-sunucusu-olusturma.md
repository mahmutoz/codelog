---
layout: docs
title: Web Sunucusu Oluşturma
---

# Web Sunucusu Oluşturma

Nodejs ile web sunucusu oluşturmak için `http` modülünü kullanabiliriz. `http` modülü Nodejs'in standart kütüphanesidir.

::: code-group
```js [index.js]
const http = require('http');
```
:::

`http` paketi ile bir web sunucusu oluşturmak için `createServer` fonksiyonunu kullanalım. 

Bu fonksiyonun iki parametresi vardır. Bunlar `request` ve `response` parametreleridir. `request` parametresi, istek bilgilerini içerir. `response` parametresi ise, cevap bilgilerini içerir.

::: code-group
```js{3-7} [index.js]
const http = require('http');

const server = http.createServer((request, response) => {
    response.statusCode = 200; // response kodu
    response.setHeader('Content-Type', 'text/plain'); // response header
    response.end('Hello, World!\n'); // response body
});
```
:::

Programı başlatmak için aşağıdaki komutu terminalde çalıştırmamız gerekir.

::: code-group
```bash [terminal]
node index.js
```
:::

`createServer` fonksiyonu, bir `http.Server` nesnesi döndürür. Bu nesne, `listen` fonksiyonuna sahiptir. Bu fonksiyon, sunucuyu belirtilen portta dinlemeye başlar.

::: code-group
```js{3,11} [index.js]
const http = require('http');

const port = 3000;

const server = http.createServer((request, response) => {
    response.statusCode = 200; // response kodu
    response.setHeader('Content-Type', 'text/plain'); // response header
    response.end('Hello, World!\n'); // response body
});

server.listen(port);
```
:::

`listen` fonksiyonu; `port`, `hostname` parametreleri dışında bir `callback` fonksiyonu alabilir. Bu fonksiyon, sunucu 
dinlemeye başladığında çağrılır.

::: code-group
```js{4,12-14} [index.js]
const http = require('http');

const port = 3000;
const hostname = '127.0.0.1';

const server = http.createServer((request, response) => {
    response.statusCode = 200; // response kodu
    response.setHeader('Content-Type', 'text/plain'); // response header
    response.end('Hello, World!\n'); // response body
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
:::

