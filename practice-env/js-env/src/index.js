// function promisify(fn) {
//     return function (...args) {
//         return new Promise(function (resolve, reject) {
//             args.push(function (err, ...rest) {
//                 if(err){
//                     reject(err)
//                     return
//                 }

//                 resolve(...rest)
//             })

//             fn.apply(null, args)
//         })
//     }
// }

// promisify((payload, cb) => cb(payload))('test').then(res => console.log(res)).catch(err => console.log(err))

console.log("------ 我是分割线 ------");

let obj = {
  a: 1,
  test: () => {
    console.log(this);
    console.log(this.a);
  },
};

obj.test(); // 1

const test = obj.test;
test(); // undefined

test.bind(obj);
test(); // undefined

test.bind(obj)(); // 1

test.call(obj); // 1

console.log("------ 我是分割线 ------");

// 实现bind函数
function bindContext(fn, context) {
  return function () {
    fn.apply(context, arguments);
  };
}

bindContext(test, obj)();
