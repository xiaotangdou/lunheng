- [bind 实现](https://github.com/xiaotangdou/daily-question-js/issues/1)

```js
let obj = {
  hello: "hello",
  sayHello(name) {
    console.log(this.hello + ": " + name);
  },
};

const { sayHello } = obj;

// 实现bind函数
function bindContext(fn, context) {
  return function () {
    fn.apply(context, arguments);
  };
}

bindContext(sayHello, obj)("bindContext");
```

- [把同步回调函数包装成变异步函数，fn(arg, cb) >>> fn(arg).then(func).catch(func)](https://github.com/xiaotangdou/daily-question-js/issues/3)

```js
function promisify(fn) {
  return function (...args) {
    return new Promise(function (resolve, reject) {
      function callback(error, ...rest) {
        if (error) {
          reject(err);
          return;
        }
        resolve(...rest);
      }
      args.push(callback);
      fn.apply(null, args);
    });
  };
}

function syncFun(name, cb) {
  setTimeout(() => {
    cb(typeof name === "string" ? null : "error", "hello: " + name);
  }, 3000);
}

const asyncFun = promisify(syncFun);

asyncFun("promisify")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

- [JavaScript 中的 null 是一个对象吗?]()
- [eval 实现](https://github.com/xiaotangdou/daily-question-js/issues/2)
