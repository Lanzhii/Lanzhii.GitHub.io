1. 事件循环系统是用来干什么的
   > 解决 JavaScript 的异步操作在单线程程序中的代码执行顺序的，
   1. 什么是单线程程序，这和异步操作之间又有什么关系呢？
      > JavaScript 是单线程执行程序的，这就意味着相比于其他语言使用多线程解决异步编程的问题而言，JavaScript 则并非如此，
2. JavaScript 对于同步代码是顺序执行的，那么异步代码又是如何通过事件循环系统(event loop)来实现的呢？

   1. 先要搞清楚 JavaScript 的同步代码是如何循序执行的

      > JavaScript 是一门语言，而浏览器或 nodejs 是 JavaScript 的运行环境，V8 是 JavaScript 的引擎

   1. JavaScript 引擎的基本工作是把开发人员写的 JavaScript 代码转换成高效、优化的代码，这样就可以通过浏览器进行解释甚至嵌入到应用中。每个 JavaScript 引擎都实现了一个版本的 ECMAScript，之所以有这么多不同的引擎，是因为它们每个都被设计运行在不同的 web 浏览器、headless 浏览器、或者像 Node.js 那样的运行时环境中，它的唯一的目的就是读取和编译 JavaScript 代码。
   1. JavaScript 是由 V8 在其内部编译的，使用了即时（JIT）编译以加快执行速度。
   1. 即时（JIT）编译 ：结合解释执行和编译执行

## 总结

1. 同步于异步的区别：
   - 同步是指程序中那些根据程序的代码流顺序执行的代码，同步任务在执行栈中执行，
   - 异步代码的执行顺序与代码流无关，而是由 event loop 控制，异步任务则被放在队列中等到执行完同步任务之后执行
2. event loop 的作用
   1. 判断异步代码？？？
   2. 对异步进行分类
      1. 任务与微任务：主要是执行的时机不同
         1. 一个任务的开始必须是上一个任务结束之后
         2. 一个微任务则是在一个任务执行完之后，下一个任务开始之前执行，
   3. 对异步进行排序：将不同的任务放在不同的队列中
      1. 分别为任务队列和微任务队列：先进先出
         1. 也就是在同一时间有多个任务(或多个微任务)时，会按照队列的特点也就是先进先出的顺序执行
   4. 执行所有处于等待中的异步：
      1. 首先执行任务队列中的第一个任务，
      2. 完成之后，会检查有没有微任务队列中是否有微任务，如果有，执行完所有微任务，如果这个过程中又有微任务被添加到微任务队列中，则继续执行微任务直至所有微任务执行完毕，
      3. 开始下一个任务队列中的任务，重复第 2 个步骤
      4. 直至任务队列中所有任务执行完毕

| 宏任务                | 浏览器 | Node |
| --------------------- | ------ | ---- |
| I/O                   | ✅     | ✅   |
| setTimeout            | ✅     | ✅   |
| setInterval           | ✅     | ✅   |
| setImmediate          | ❌     | ✅   |
| requestAnimationFrame | ✅     | ❌   |

| 微任务                     | 浏览器 | Node |
| -------------------------- | ------ | ---- |
| process.nextTick           | ❌     | ✅   |
| MutationObserver           | ✅     | ❌   |
| Promise.then catch finally | ✅     | ✅   |

1. 参考
   1. [并发模型与事件循环](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop)
   2. [深入：微任务与 Javascript 运行时环境](https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth)
   3. [微任务、宏任务与 Event-Loop](https://juejin.cn/post/6844903657264136200)
