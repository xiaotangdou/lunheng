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
