/**
 * with 关键字，在内部访问变量是会在当前上下文中查找，查到终止，反之向父级上下文查找
 * 1、如何防止阻止向上查找
 */
global.name = "grandfather";

let obj = {
  name: "father",
  age: 18,
  children: {
    name: "son",
    age: 2,
  },
};

with (obj) {
  console.log(name); // father
}
