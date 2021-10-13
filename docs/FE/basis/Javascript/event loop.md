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
