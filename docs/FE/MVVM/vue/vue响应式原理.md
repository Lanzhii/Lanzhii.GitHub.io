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
     > - 语法：let p=new Proxy(target,handler)
     >   - handler——一个通常以函数作为属性的对象，这些属性代表的是在对target操作时代理p的行为
     >   - handler对象的默认属性包含set，get
     >   - 难点：在Proxy对象

   