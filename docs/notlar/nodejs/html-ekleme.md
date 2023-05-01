---
layout: docs
title: HTML Ekleme
---

# HTML Ekleme

Bir önceki sayfada [web sunucumuzu](web-sunucusu-olusturma.md) oluşturmuştuk. Şimdi bu sunucuya bir HTML dosyası ekleyelim.

ilk olarak `index.html` dosyasını oluşturalım.

::: code-group
```html [index.html]
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Nodejs Web Sunucusu</title>
</head>
<body>
    <h1>Nodejs Web Sunucusu</h1>
</body>
</html>
```
:::

`fs` modülünü kullanarak `index.html` dosyasını okuyup, okuduğumuz dosyayı `response` nesnesinin `end` 
metoduna parametre olarak verelim.

::: code-group
```html [index.html]
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Nodejs Web Sunucusu</title>
</head>
<body>
    <h1>Nodejs Web Sunucusu</h1>
</body>
</html>
```

```js{2,7,10-12} [index.js]
const http = require('http');
const fs = require('fs');

const port = 3000;
const hostname = '127.0.0.1';

const homePage = fs.readFileSync('index.html');

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.end(homePage);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
:::
