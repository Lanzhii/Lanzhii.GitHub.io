# `vue`响应式原理

> 响应式指的是视图层View与Model数据之间“联动关系”，只要任意一方改变另一方也会跟着改变。

## vue2响应式原理

- 要做到View与Model的响应式变化，第一步就是需要在二者之间建立联系，`vue2`中是通过`Object.defineProperty()`<sup>(1)</sup>来实现的...

> ​	- `Javascript`中的`defineProperty()`是对象`Object`的一个方法，可以通过此方法对对象的属性进行添加或修改；
>
> ​	- 语法：`Object.defineProperty(object,property,{})`
>
> ​	- 注意事项：只能通过Object调用该方法，而不能通过对象的实例调用该方法

 - `vue`会遍历`data`对象中所有`property`并通过`Object.defineProperty()`为每一个property设置getter/setter方法，用以对property的读取和修改，

    - `vue`会给每一个`vue`实例建立一个`watched`实例，这个实例做两件事，
      1. 在`DOM`树渲染时，`watched`实例会通过`data`的`property`的getter方法为对应的property建立依赖；
      2. 当修改依赖项时会触发setter方法，watched实例监测到被触发的setter方法，从而使其对应的组件重新渲染；

   ## vue3响应式原理

   - vue3中的响应式时通过JavaScript的Proxy对象来实现的，

     > - Proxy对象会创建一个对象的代理，目的是拦截对目标对象的所有“交互”操作；
     > - 语法：let proxy=new Proxy(target,handler)
     >   - handler——一个通常以函数作为属性的对象，这些属性代表的是在对target操作时代理p的行为
     >   - handler对象的默认属性包含set，get
     >   - 难点：在Proxy对象

     - vue3通过Proxy对象给data对象中的property创建一个proxy代理，proxy的handler上面包含`proxy.set(target,property)`和`proxy.get(target,property)`方法
       - get方法中调用一个track方法，目的是检测当前是哪一个effect在运行，并将其与property、target记录在一起，effect方法对当前运行的代码进行包裹，目的是将其记录；
       - set方法中调用trigger方法，目的是检测哪些effect方法依赖于目标property，并执行这些effect方法
     - 这个代理主要做三件事：
       1. 在某个property被读取时进行追踪：调用get方法，将运行的代码(effect)、target、property记录在一起
       2. 当某个值发生改变时进行检测：调用set方法
       3. 重新运行代码来读取原始值：触发trigger方法，