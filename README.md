Apollo
---

To build the style guide

```
./node_modules/.bin/gulp frontsize:build && node index.js && cd ./test && ./node_modules/.bin/gulp frontsize:css && cd ../ && php -S localhost:8000 -t ./public
```



To test the HTML results

```
node index.js && php -S localhost:8000 -t ./public
```
