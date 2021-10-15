# `vue`响应式原理

> 响应式指的是视图层 View 与 Model 数据之间“联动关系”，只要任意一方改变另一方也会跟着改变。

## vue2 响应式原理

- 要做到 View 与 Model 的响应式变化，第一步就是需要在二者之间建立联系，`vue2`中是通过`Object.defineProperty()`<sup>(1)</sup>来实现的...

> ​ - `Javascript`中的`defineProperty()`是对象`Object`的一个方法，可以通过此方法对对象的属性进行添加或修改；
>
> ​ - 语法：`Object.defineProperty(object,property,{})`
>
> ​ - 注意事项：只能通过 Object 调用该方法，而不能通过对象的实例调用该方法

- `vue`会遍历`data`对象中所有`property`并通过`Object.defineProperty()`为每一个 property 设置 getter/setter 方法，用以对 property 的读取和修改，

  - `vue`会给每一个`vue`实例建立一个`watched`实例，这个实例做两件事，
    1. 在`DOM`树渲染时，`watched`实例会通过`data`的`property`的 getter 方法为对应的 property 建立依赖；
    2. 当修改依赖项时会触发 setter 方法，watched 实例监测到被触发的 setter 方法，从而使其对应的组件重新渲染；

## vue3 响应式原理

- vue3 中的响应式时通过 JavaScript 的 Proxy 对象来实现的，

> - Proxy 对象会创建一个对象的代理，目的是拦截对目标对象的所有“交互”操作；
> - 语法：let proxy=new Proxy(target,handler)
>   - handler——一个通常以函数作为属性的对象，这些属性代表的是在对 target 操作时代理 p 的行为
>   - handler 对象的默认属性包含 set，get
>   - 难点：在 Proxy 对象

- vue3 通过 Proxy 对象给 data 对象中的 property 创建一个 proxy 代理，proxy 的 handler 上面包含`proxy.set(target,property)`和`proxy.get(target,property)`方法
  - get 方法中调用一个 track 方法，目的是检测当前是哪一个 effect 在运行，并将其与 property、target 记录在一起，effect 方法对当前运行的代码进行包裹，目的是将其记录；
  - set 方法中调用 trigger 方法，目的是检测哪些 effect 方法依赖于目标 property，并执行这些 effect 方法
- 这个代理主要做三件事：
  1.  在某个 property 被读取时进行追踪：调用 get 方法，将运行的代码(effect)、target、property 记录在一起
  2.  当某个值发生改变时进行检测：调用 set 方法
  3.  重新运行代码来读取原始值：触发 trigger 方法，
