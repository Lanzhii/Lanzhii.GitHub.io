# `Javascript`问题集

> 判断数据类型的方法、原型链、this指向、设计模式、call, apply, bind, new实现、防抖节流、let, `var`, `const` 区别、event loop、单线程，同步异步、promise使用及实现、promise并行执行和顺序执行、闭包、垃圾回收和内存泄漏、数组方法、数组乱序, 数组扁平化、事件委托、事件监听、事件模型、typescript、模块、

## 数据类型

#### 1. 判断数据类型有几种方法⭐⭐⭐⭐⭐

1. ##### typeof

   缺点：typeof null的值为Object，无法分辨是null还是Object

2. ##### instanceof

   缺点：只能判断对象是否存在于目标对象的原型链上

3. ##### constructor

4. ##### Object.prototype.toString.call()

> 一种最好的基本类型检测方式 Object.prototype.toString.call() 它可以区分 null 、 string 、boolean 、 number 、 undefined 、 array 、 function 、 object 、 date 、 math 数据类型。
>
> 缺点：不能细分为谁谁的实例

#### 2.**instanceof原理**⭐⭐⭐⭐⭐

```javascript
    function myInstance(L, R) {//L代表instanceof左边，R代表右边
      var RP = R.prototype
      var LP = L.__proto__
      while (true) {
        if(LP == null) {
          return false
        }
        if(LP == RP) {
          return true
        }
        LP = LP.__proto__
      }
    }
    console.log(myInstance({},Object)); 
   
```

3. #### **手写call、apply、bind**⭐⭐⭐⭐⭐

   1. ##### call和apply实现思路主要是：

      1. 判断是否是函数调用，若非函数调用抛异常
      2. 通过新对象（context）来调用函数
      3. 给context创建一个fn设置为需要调用的函数
      4. 结束调用完之后删除fn

##### **call**

```javascript
    Function.prototype.myCall = function (context) {
      // 先判断调用myCall是不是一个函数
      // 这里的this就是调用myCall的
      if (typeof this !== 'function') {
        throw new TypeError("Not a Function")
      }

      // 不传参数默认为window
      context = context || window

      // 保存this
      context.fn = this

      // 保存参数
      let args = Array.from(arguments).slice(1)   //Array.from 把伪数组对象转为数组

      // 调用函数
      let result = context.fn(...args)

      delete context.fn

      return result

    }
```

##### **apply**

```javascript
Function.prototype.myApply = function (context) {
      // 判断this是不是函数
      if (typeof this !== "function") {
        throw new TypeError("Not a Function")
      }

      let result

      // 默认是window
      context = context || window

      // 保存this
      context.fn = this

      // 是否传参
      result=arguments[1]?context.fn(...arguments[1]):context.fn()
      
      delete context.fn

      return result
    }
```



2. ##### bind实现思路

   1. 判断是否是函数调用，若非函数调用抛异常
   2. 返回函数
   3. 判断函数的调用方式，是否是被new出来的
   4. new出来的话返回空对象，但是实例的__proto__指向_this的prototype
   5. 完成函数柯里化
      Array.prototype.slice.call()

```javascript
    Function.prototype.myBind = function(context){
      // 判断是否是一个函数
      if(typeof this !== "function") {
        throw new TypeError("Not a Function")
      }
      // 保存调用bind的函数
      const _this = this 
      // 保存参数
      const args = Array.prototype.slice.call(arguments,1)
      // 返回一个函数
      return function F () {
        // 判断是不是new出来的
        if(this instanceof F) {
          // 如果是new出来的
          // 返回一个空对象，且使创建出来的实例的__proto__指向_this的prototype，且完成函数柯里化
          return new _this(...args,...arguments)
        }else{
          // 如果不是new出来的改变this指向，且完成函数柯里化
          return _this.apply(context,args.concat(...arguments))
        }
      } 
    }
```

#### 3. **字面量创建对象和new创建对象有什么区别，new内部都实现了什么，手写一个new**⭐⭐⭐⭐⭐

- 创建一个新对象
- 使新对象的`__proto__`指向原函数的`prototype`
- 改变this指向（指向新的obj）并执行该函数，执行结果保存起来作为result
- 判断执行函数的结果是不是null或Undefined，如果是则返回之前的新对象，如果不是则返回result

手写new

```javascript
// 手写一个new
function myNew(fn, ...args) {
  // 创建一个空对象
  let obj = {}
  // 使空对象的隐式原型指向原函数的显式原型
  obj.__proto__ = fn.prototype
  // this指向obj
  let result = fn.apply(obj, args)
  // 返回
  return result instanceof Object ? result : obj
}
```

##### 4. **字面量new出来的对象和 `Object.create(null)`创建出来的对象有什么区别**⭐⭐⭐

- 字面量和new创建出来的对象会继承Object的方法和属性，他们的隐式原型会指向Object的显式原型，
- 而 `Object.create(null)`创建出来的对象原型为null，作为原型链的顶端，自然也没有继承Object的方法和属性

##### 5. **什么是执行栈，什么是执行上下文？**⭐⭐⭐⭐

###### 执行上下文分为：

 - 全局执行上下文

> 创建一个全局的window对象，并规定this指向window，执行js的时候就压入栈底，关闭浏览器的时候才弹出

 - 函数执行上下文

> 每次函数调用时，都会新创建一个函数执行上下文
> 执行上下文分为创建阶段和执行阶段
> 创建阶段：函数环境会创建变量对象：arguments对象（并赋值）、函数声明（并赋值）、变量声明（不赋值），函数表达式声明（不赋值）；会确定this指向；会确定作用域
> 执行阶段：变量赋值、函数表达式赋值，使变量对象编程活跃对象
> eval执行上下文

###### 执行栈：

> - 首先栈特点：先进后出
> - 当进入一个执行环境，就会创建出它的执行上下文，然后进行压栈，当程序执行完成时，它的执行上下文就会被销毁，进行弹栈。
> - 栈底永远是全局环境的执行上下文，栈顶永远是正在执行函数的执行上下文
>   只有浏览器关闭的时候全局执行上下文才会弹出

#### 6. **说一说 JS 中的常用的继承方式有哪些？以及各个继承方式的优缺点。**⭐⭐⭐⭐⭐



#### 7. 递归

```javascript
// 简易版  
    function deepClone(o) {
      let obj = {}
      for (var i in o) {
        // if(o.hasOwnProperty(i)){
        if (typeof o[i] === "object") {
          obj[i] = deepClone(o[i])
        } else {
          obj[i] = o[i]
        }
        // }
      }
      return obj
    }


    var myObj = {
      a: {
        a1: { a2: 1 },
        a10: { a11: 123, a111: { a1111: 123123 } }
      },
      b: 123,
      c: "123"
    }

    var deepObj1 = deepClone(myObj)
    deepObj1.a.a1 = 999
    deepObj1.b = false
    console.log(myObj);



    // 简易版存在的问题：参数没有做检验，传入的可能是 Array、null、regExp、Date
    function deepClone2(o) {
      if (Object.prototype.toString.call(o) === "[object Object]") {  //检测是否为对象
        let obj = {}
        for (var i in o) {
          if (o.hasOwnProperty(i)) {
            if (typeof o[i] === "object") {
              obj[i] = deepClone(o[i])
            } else {
              obj[i] = o[i]
            }
          }
        }
        return obj
      } else {
        return o
      }
    }

    function isObject(o) {
      return Object.prototype.toString.call(o) === "[object Object]" || Object.prototype.toString.call(o) === "[object Array]"
    }

    // 继续升级，没有考虑到数组，以及ES6中的map、set、weakset、weakmap
    function deepClone3(o) {
      if (isObject(o)) {//检测是否为对象或者数组
        let obj = Array.isArray(o) ? [] : {}
        for (let i in o) {
          if (isObject(o[i])) {
            obj[i] = deepClone(o[i])
          } else {
            obj[i] = o[i]
          }
        }
        return obj
      } else {
        return o
      }
    }


    // 有可能碰到循环引用问题  var a = {}; a.a = a; clone(a);//会造成一个死循环
    // 循环检测
    // 继续升级
    function deepClone4(o, hash = new map()) {
      if (!isObject(o)) return o//检测是否为对象或者数组
      if (hash.has(o)) return hash.get(o)
      let obj = Array.isArray(o) ? [] : {}

      hash.set(o, obj)
      for (let i in o) {
        if (isObject(o[i])) {
          obj[i] = deepClone4(o[i], hash)
        } else {
          obj[i] = o[i]
        }
      }
      return obj
    }

    // 递归易出现爆栈问题
    //  将递归改为循环，就不会出现爆栈问题了
    var a1 = { a: 1, b: 2, c: { c1: 3, c2: { c21: 4, c22: 5 } }, d: 'asd' };
    var b1 = { b: { c: { d: 1 } } }
    function cloneLoop(x) {
      const root = {};
      // 栈 
      const loopList = [  //->[]->[{parent:{a:1,b:2},key:c,data:{ c1: 3, c2: { c21: 4, c22: 5 } }}]
        {
          parent: root,
          key: undefined,
          data: x,
        }
      ];
      while (loopList.length) {
        // 深度优先
        const node = loopList.pop();
        const parent = node.parent; //{} //{a:1,b:2}
        const key = node.key; //undefined //c
        const data = node.data; //{ a: 1, b: 2, c: { c1: 3, c2: { c21: 4, c22: 5 } }, d: 'asd' }  //{ c1: 3, c2: { c21: 4, c22: 5 } }}
        // 初始化赋值目标，key 为 undefined 则拷贝到父元素，否则拷贝到子元素
        let res = parent; //{}->{a:1,b:2,d:'asd'} //{a:1,b:2}->{}
        if (typeof key !== 'undefined') {
          res = parent[key] = {};
        }
        for (let k in data) {
          if (data.hasOwnProperty(k)) {
            if (typeof data[k] === 'object') {
              // 下一次循环 
              loopList.push({
                parent: res,
                key: k,
                data: data[k],
              })
            } else {
              res[k] = data[k];
            }
          }
        }
      }
      return root
    }


    function deepClone5(o) {
      let result = {}
      let loopList = [
        {
          parent: result,
          key: undefined,
          data: o
        }
      ]

      while (loopList.length) {
        let node = loopList.pop()
        let { parent, key, data } = node
        let anoPar = parent
        if (typeof key !== 'undefined') {
          anoPar = parent[key] = {}
        }

        for (let i in data) {
          if (typeof data[i] === 'object') {
            loopList.push({
              parent: anoPar,
              key: i,
              data: data[i]
            })
          } else {
            anoPar[i] = data[i]
          }
        }
      }
      return result
    }


    let cloneA1 = deepClone5(a1)
    cloneA1.c.c2.c22 = 5555555
    console.log(a1);
    console.log(cloneA1);


```

##### 2. JSON.stringify()实现深拷贝

```javascript
function cloneJson(o) {
  return JSON.parse(JSON.stringify(o))
}

// let obj = { a: { c: 1 }, b: {} };
// obj.b = obj;
// console.log(JSON.parse(JSON.stringify(obj))) // 报错 // Converting circular structure to JSON
```

