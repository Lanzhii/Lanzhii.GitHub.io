### Vue 的响应式原理

> - 数据驱动视图，UI =render(state)，state 状态发生变化，vue 经过模板编译，虚拟 DOM，patch 过程更新视图。

- vue2.x 会使用 object.defineProperty 重新当以 data 中的所有属性，当页面使用对应属性，首先进行数据收集，如果是属性变化会通知相关依赖进行更新操作。
- vue3.x 改用 proxy 替换 object.defineproperty，因为 Proxy 可以直接监听对象和数组的变化。

### Vue 的双向绑定

双向绑定是通过数据劫持结合发布者-订阅者模式来实现的，get 是收集依赖，set 进行数据变化更新操作，实现一个监听器 observer，用来劫持并监听所有属性，如果有变动，通知订阅者，实现一个订阅器 watcher，可以收到属性的变化并执行响应的函数，从而更新视图，实现一个解析器 compile，可以扫描解析每个节点的相关指令，并根据初始化模板数据一起初始化响应的订阅器

### Vue 的 neextTick 原理

在下次 DOM 更新循环之后执行延迟回调，nextTick 主要使用了宏任务和微任务，根据执行环境分别尝试采用 promise，mutationObserver，setImmediate 定义一个异步方法，多次调用 nextTick 会将方法存入任务队列中，通过异步方法清空当前队列

### Vue 组件的生命周期

一个组件从创建，数据初始化，挂载，更新，渲染，更新，销毁的过程称为生命周期。

1. 创建前后：

beforeCreate：Vue 实例的 data 和挂载元素 el 都未定义，还未初始化。
created 阶段：Vue 实例的数据对象 data 有了，el 为 undefined，实例创建完成，挂载未完成 2. 载入前后：

beforeMount：Vue 实例的 el 和 data 都初始化了，还没有挂载，此时 DOM 为虚拟 DOM。把需内中渲染好的模板结构替换到页面上。
mounted：Vue 实例挂载完成，成功渲染视图，页面渲染完成。 3. 销毁前后：

beforeDestory：组件即将销毁，还没销毁，
destoryed：Vue 实例销毁后调用，组件无法使用，已经解除了事件监听以及 DOM 的绑定 4. 更新前后:

beforeUpdate：当 data 变化后，数据更新的时候调用，把重新渲染好的模板结构放到页面上，
updated：页面更新完成，数据更新新数据
Vue 父子组件的生命周期调用顺序

组件的调用顺序都是先父后子，渲染完成时先子后父
组件的销毁时先父后子，销毁完成是先子后父

加载渲染完成：父 createCreate–父 created–父 breateMount–子 beforeCreate–子 created–子 breateMount–子 mounted—父 mounted
子组件更新过程：父 breateUpdate—子 beforeUpdate----子 updated----父 updated
父组件更新过程: 父 beforeUpdate—父 updated
销毁过程: 父 beforeDestory—子 beforeDestory—子 destoryed—父 destoryed
computed 和 watch 的区别

computed 具有缓存功能，只有依赖的数据发生了变化才触发 computed

watcher 没有缓存功能，可以监听数据执行回调，深度监听的话对象中的属性时，可以打开 deep-true 选项，watcher 支持异步，有两个参数，newData，和 oldData，=，两个属性，deep：深入观察没一层层遍历对象，immediate：组件加载立即执行回调函数

组件 data 为什么是函数

一个组件被复用多次的话，也就会创建多个实例，本质上这些实例用的都是同一个构造函数，如果 data 是对象的话，对象属于引用类型，会影响到所有的实例

### 组件间如何通信

1. 父子组件通信

- 父组件通过 props 向子组件传值
- 子组件通过 emit，on 向父组件传值

父子组件获取父子组件实例 p a r e n t , parent,parent,children
ref 获取实例的方式调用组件的属性和方法 2. 兄弟组件通信

event bus 实例跨组件通信
-Vue.prototype.$bus = new Vue()
vuex 3. 跨组件通信

vuex
a t t r s , attrs,attrs,listeners

### diff 算法事件复杂度

1. 判断是否是静态节点

静态节点无需处理 2. VNode 是否是文本节点

oldVNode 不是文本阶段，直接使用 setTextNode 设置为文本节点，再把内容复制过去
oldVNode 是文本节点，比较两个新旧节点是否相等，让旧的节点的内容等于新节点内容 3. VNode 是元素节点

VNode 不含有子节点，也不是文本节点，直接把旧节点的内容清空即可
VNode 含有子节点
旧的节点里不包含子节点，就把新节点的内容创建一份插入到旧的节点里面
旧的节点里播包含子节点，就需要递归遍历对比更新子节点
如果旧的节点是文本节点，则把文本清空，然后把新节点的内容创建一份插入到旧节点里
正常比较 DOM-Diff 是 O(n^3)，Vue2 的 diff 算法采用了双端比较优化算法和只有当新旧 children 都为多个子节点时才需要用黑犀牛的 Diff 算法进行同层级比较时间复杂度就是 O(n)

vue 中 keep-alive 有什么用

我们可以把一些不常变动的组件或者需要缓存的组件用包裹起来，这样就会帮我们把组件保存在内存中，而不是直接的销毁

好处：保留组件的状态或避免多次渲染，提高了页面性能

有一个淘汰策略 LRU，

将新数据放到数组尾部
每当缓存命中，将缓存命中的数据放到数组尾部
当 this.keys 满的时候，将头部的数据销毁
生命周期钩子：activated：缓存组件激活的时候，deactivated：缓存组件销毁的时候

### Vue 中 history 和 hash 实现的原理

https://juejin.cn/post/6844903589123457031

### vuex 的原理
