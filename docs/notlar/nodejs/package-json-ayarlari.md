---
layout: docs
title: Package.json Ayarları
---

# Package.json Ayarları

`package.json` dosyası, projemizin ayarlarının bulunduğu dosyadır. Bu dosyada projemizin adı, versiyonu, bağımlılıkları,
test komutları gibi bilgiler bulunur.

`package.json` dosyasını otomatik olarak oluşturmak için aşağıdaki komutu terminalde çalıştırmamız gerekir. Bu komut,
`package.json` dosyasını oluşturur ve varsayılan ayarları ekler.

Varsayılan ayarları kullanmak istemiyorsak, `-y` parametresini kaldırabiliriz. Buradaki `-y` parametresi, `yes` 
anlamına gelir. Bu parametre, varsayılan ayarları kabul ettiğimizi belirtir.

::: code-group
```bash [terminal]
npm init -y
```
:::

Çıktı olarak aşağıdaki gibi bir `package.json` dosyası oluşturulur.

::: code-group
```json [package.json]
{
  "name": "create-server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
:::

## version

`version` özelliği, projenin versiyonunu belirtir. Bu özellik, `major.minor.patch` şeklinde 
belirtilir. Bu versiyonlama şekline [semver](https://semver.org/) denir. Bu versiyonlama şekli, `major`, `minor` ve 
`patch` olmak üzere üç parçadan oluşur. Bu parçaların anlamları şu şekildedir: 

- `major`: Büyük değişikliklerde artırılır.
- `minor`: Küçük değişikliklerde artırılır.
- `patch`: Hata düzeltmelerinde artırılır.

## main

`main` özelliği, projenin ana dosyasını belirtir. Bu özellik, varsayılan olarak `index.js` veya `app.js` olarak 
belirtilebilir.

## [`nodemon`](https://www.npmjs.com/package/nodemon) Paketi

[nodemon](https://www.npmjs.com/package/nodemon) paketi, projede yapılan değişiklikleri algılayarak, projeyi yeniden başlatır. Böylelikle her değişiklikte 
projeyi yeniden başlatmaktan kurtuluruz.

Bu paket, geliştirme ortamında kullanılan bir pakettir. [nodemon](https://www.npmjs.com/package/nodemon) paketini, geliştirme ortamında kullanmak için 
`devDependencies` özelliğine ekleyelim.

::: code-group
```bash [npm]
npm install --save-dev nodemon
```
```bash [yarn]
yarn add nodemon -D
```
:::

Şimdi bu paketi, `package.json` dosyasının `scripts` özelliğine ekleyelim.

::: code-group
```json{7} [package.json]
{
  "name": "create-server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
:::
