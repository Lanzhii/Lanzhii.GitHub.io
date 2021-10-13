[GitHub4827★](https://github.com/1milligram/1loc)

**\*\*# 最喜欢的 JavaScript 实用程序\*\***

**\*\*#### 在一行代码中！\*\***

**\*\*### 数组\*\***

-[x] 1 .将值转换为数组

```javascript
const castArray = (value) => (Array.isArray(value) ? value : [value])

// Examples
castArray(1) // [1]
castArray([1, 2, 3]) // [1, 2, 3]
```

-[x] 2 .检查数组是否为空[#](https://1loc.dev/#check-if-an-array-is-empty)

```js
const isEmpty = (arr) => !Array.isArray(arr) || arr.length === 0

// Examples
isEmpty([]) // true
isEmpty([1, 2, 3]) // false
```

-[x] 3 .克隆一个数组[#](https://1loc.dev/#clone-an-array)

```js
/*

*/
const clone = (arr) => arr.slice(0)

// Or
const clone = (arr) => [...arr]

// Or
const clone = (arr) => Array.from(arr)

// Or
const clone = (arr) => arr.map((x) => x)

// Or
const clone = (arr) => JSON.parse(JSON.stringify(arr))

// Or
const clone = (arr) => arr.concat([])
```

-[x] 4 .不管顺序如何比较两个数组

```js
// `a` and `b` are arrays
const isEqual = (a, b) => JSON.stringify(a.sort()) === JSON.stringify(b.sort())

// Examples
isEqual([1, 2, 3], [1, 2, 3]) // true
isEqual([1, 2, 3], [1, 3, 2]) // true
isEqual([1, 2, 3], [1, '2', 3]) // false
```

-[x] 5 .比较两个数组

```js
// `a` and `b` are arrays
const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b)

// Or
const isEqual = (a, b) => a.length === b.length && a.every((v, i) => v === b[i])

// Examples
isEqual([1, 2, 3], [1, 2, 3]) // true
isEqual([1, 2, 3], [1, '2', 3]) // false
```

-[x] 6 .将对象数组转换为单个对象

```js
const toObject = (arr, key) => arr.reduce((a, b) => ({ ...a, [b[key]]: b }), {})

// Or
const toObject = (arr, key) => Object.fromEntries(arr.map((it) => [it[key], it]))

// Example
toObject(
  [
    { id: '1', name: 'Alpha', gender: 'Male' },
    { id: '2', name: 'Bravo', gender: 'Male' },
    { id: '3', name: 'Charlie', gender: 'Female' }
  ],
  'id'
)
/* 
{
    '1': { id: '1', name: 'Alpha', gender: 'Male' },
    '2': { id: '2', name: 'Bravo', gender: 'Male' },
    '3': { id: '3', name: 'Charlie', gender: 'Female' },
}
*/
```

-[x] 7 .将字符串数组转换为数字

```js
const toNumbers = (arr) => arr.map(Number)

// Or
const toNumbers = (arr) => arr.map((x) => +x)

// Example
toNumbers(['2', '3', '4']) // [2, 3, 4]
```

-[x] 8 .按对象数组的属性计数

```js
const countBy = (arr, prop) =>
  arr.reduce((prev, curr) => ((prev[curr[prop]] = ++prev[curr[prop]] || 1), prev), {})

// Example
countBy(
  [
    { branch: 'audi', model: 'q8', year: '2019' },
    { branch: 'audi', model: 'rs7', year: '2020' },
    { branch: 'ford', model: 'mustang', year: '2019' },
    { branch: 'ford', model: 'explorer', year: '2020' },
    { branch: 'bmw', model: 'x7', year: '2020' }
  ],
  'branch'
)

// { 'audi': 2, 'ford': 2, 'bmw': 1 }
```

unknown 已解决

-[x] 9 .计算数组中某个值的出现次数

```js
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0)

// Or
const countOccurrences = (arr, val) => arr.filter((item) => item === val).length

// Examples
countOccurrences([2, 1, 3, 3, 2, 3], 2) // 2
countOccurrences(['a', 'b', 'a', 'c', 'a', 'b'], 'a') // 3
```

-[x] 10 .计算数组元素的出现次数

```js
const countOccurrences = (arr) =>
  arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {})

// Examples
countOccurrences([2, 1, 3, 3, 2, 3]) // { '1': 1, '2': 2, '3': 3 }
countOccurrences(['a', 'b', 'a', 'c', 'a', 'b']) // { 'a': 3, 'b': 2, 'c': 1 }
```

unknown 已解决

-[x] 11 .创建一个累积和的数组

```js
const accumulate = (arr) => arr.reduce((a, b, i) => (i === 0 ? [b] : [...a, b + a[i - 1]]), [])
// Or
const accumulate = (arr) =>
  arr.map(
    (
      (sum) => (value) =>
        (sum += value)
    )(0)
  )
// Or
const accumulate = (arr) => arr.reduce((a, b, i) => (i === 0 ? [b] : [...a, b + a[i - 1]]), 0)
```

-[x] 12 .创建给定范围内的数字数组

```js
const range = (min, max) => [...Array(max - min + 1).keys()].map((i) => i + min)

// Or
const range = (min, max) =>
  Array(max - min + 1)
    .fill(0)
    .map((_, i) => min + i)

// Or
const range = (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i)

// Example
range(5, 10) // [5, 6, 7, 8, 9, 10]
```

-[x] 13 .创建笛卡尔积

```js
const cartesian = (...sets) =>
  sets.reduce((acc, set) => acc.flatMap((x) => set.map((y) => [...x, y])), [[]])

// Example
cartesian([1, 2], [3, 4]) // [ [1, 3], [1, 4], [2, 3], [2, 4] ]

/*
       3       4
   ---------------
1 | [1, 3]  [1, 4]
  |
2 | [2, 3]  [2, 4]


*/
```

太复杂，失去可读性？？？

-[x] 14 .清空数组

```js
const empty = (arr) => (arr.length = 0)

// Or
arr = []
```

-[x] 15 .从数组中找到最接近的数字[#](https://1loc.dev/#find-the-closest-number-from-an-array)

-[x] 16 .查找数组最后一个匹配项的索引[#](https://1loc.dev/#find-the-index-of-the-last-matching-item-of-an-array)

-[x] 17 .查找数组最大项的索引[#](https://1loc.dev/#find-the-index-of-the-maximum-item-of-an-array)

-[x] 18 .查找数组中最小项的索引[#](https://1loc.dev/#find-the-index-of-the-minimum-item-of-an-array)

-[x] 19 .查找数组中最长字符串的长度[#](https://1loc.dev/#find-the-length-of-the-longest-string-in-an-array)

-[x] 20 .通过给定的键查找数组的最大项[#](https://1loc.dev/#find-the-maximum-item-of-an-array-by-given-key)

-[x] 21 .查找数组的最大项[#](https://1loc.dev/#find-the-maximum-item-of-an-array)

-[x] 22 .通过给定的键查找数组的最小项[#](https://1loc.dev/#find-the-minimum-item-of-an-array-by-given-key)

-[x] 23 .查找数组的最小项[#](https://1loc.dev/#find-the-minimum-item-of-an-array)

-[x] 24 .展平一个数组[#](https://1loc.dev/#flatten-an-array)

-[x] 25 .获取所有连续元素的数组[#](https://1loc.dev/#get-all-arrays-of-consecutive-elements)

-[x] 26 .获取数组的所有第 n 项[#](https://1loc.dev/#get-all-nth-items-of-an-array)

-[x] 27 .获取数组的所有子集[#](https://1loc.dev/#get-all-subsets-of-an-array)

-[x] 28 .得到的值的索引以阵列[#](https://1loc.dev/#get-indices-of-a-value-in-an-array)

-[x] 29 .获取数组的平均值[#](https://1loc.dev/#get-the-average-of-an-array)

-[x] 30 .获取数组的交集[#](https://1loc.dev/#get-the-intersection-of-arrays)

-[x] 31 .获取数字数组的等级[#](https://1loc.dev/#get-the-rank-of-an-array-of-numbers)

-[x] 32 .获取数字数组的总和[#](https://1loc.dev/#get-the-sum-of-an-array-of-numbers)

-[x] 33 .获取数组的唯一值[#](https://1loc.dev/#get-the-unique-values-of-an-array)

-[x] 34 .获取数组的并集[#](https://1loc.dev/#get-union-of-arrays)

-[x] 35 .基的由密钥对象数组[#](https://1loc.dev/#group-an-array-of-objects-by-a-key)

-[x] 36 .合并两个数组[#](https://1loc.dev/#merge-two-arrays)

-[x] 37 .分区基于条件的阵列[#](https://1loc.dev/#partition-an-array-based-on-a-condition)

-[x] 38 .删除数组中的重复值[#](https://1loc.dev/#remove-duplicate-values-in-an-array)

-[x] 39 .从数组中删除假值[#](https://1loc.dev/#remove-falsy-values-from-array)

-[x] 40 .重复数组[#](https://1loc.dev/#repeat-an-array)

-[x] 41 .打乱数组[#](https://1loc.dev/#shuffle-an-array)

-[x] 42 .排序给出关键项目的数组[#](https://1loc.dev/#sort-an-array-of-items-by-given-key)

-[x] 43 .对数字数组进行排序[#](https://1loc.dev/#sort-an-array-of-numbers)

-[x] 44 .将数组拆分为块[#](https://1loc.dev/#split-an-array-into-chunks)

-[x] 45 .交换矩阵的行和列[#](https://1loc.dev/#swap-the-rows-and-columns-of-a-matrix)

-[x] 46 .交换两个数组项[#](https://1loc.dev/#swap-two-array-items)

-[x] 47 .解压缩数组数组[#](https://1loc.dev/#unzip-an-array-of-arrays)

-[x] 48 .压缩多个数组[#](https://1loc.dev/#zip-multiple-arrays)

-[x] **\*\*### 约会时间 49 .将 AM PM 后缀添加到一个小时\*\***\*\***\***\***[\*\***#\***\*]\*\***\*\***\*\*\*\***(\***\*\*\*\*\*\***\***https://1loc.dev/-[x] #add-am-pm-suffix-to-an-hour\*\***)

\*\*

-[x]

-[x] 50 .计算两个日期之间的差异天数[#](https://1loc.dev/#calculate-the-number-of-difference-days-between-two-dates)

-[x] 51 .计算两个日期之间的月数[#](https://1loc.dev/#calculate-the-number-of-months-between-two-dates)

-[x] 52 .比较两个日期[#](https://1loc.dev/#compare-two-dates)

-[x] 53 .将日期转换为 YYYY-MM-DD 格式[#](https://1loc.dev/#convert-a-date-to-yyyy-mm-dd-format)

-[x] 54 .将秒转换为 hh:mm:ss 格式[#](https://1loc.dev/#convert-seconds-to-hh-mm-ss-format)

-[x] 55 .从日期中提取年、月、日、时、分、秒和毫秒[#](https://1loc.dev/-[x] #extract-year-month-day-hour-minute-second-and-millisecond-from-a-date)

-[x] 56 .格式化给定语言环境的日期[#](https://1loc.dev/#format-a-date-for-the-given-locale)

-[x] 57 .获取日期的当前季度[#](https://1loc.dev/#get-the-current-quarter-of-a-date)

-[x] 58 .以秒为单位获取当前时间戳[#](https://1loc.dev/#get-the-current-timestamp-in-seconds)

-[x] 59 .从日期获取一年中的哪一天[#](https://1loc.dev/#get-the-day-of-the-year-from-a-date)

-[x] 60 .获取日期所在月份的第一个日期[#](https://1loc.dev/#get-the-first-date-in-the-month-of-a-date)

-[x] 61 .获取日期所在月份的最后一个日期[#](https://1loc.dev/#get-the-last-date-in-the-month-of-a-date)

-[x] 62 .获取日期的月份名称[#](https://1loc.dev/#get-the-month-name-of-a-date)

-[x] 63 .获取给定月份的天数[#](https://1loc.dev/#get-the-number-of-days-in-given-month)

-[x] 64 .获取时区字符串[#](https://1loc.dev/#get-the-timezone-string)

-[x] 65 .获取明天的日期[#](https://1loc.dev/#get-the-tomorrow-date)

-[x] 66 .获取一年中的总天数[#](https://1loc.dev/#get-the-total-number-of-days-in-a-year)

-[x] 67 .获取日期的工作日[#](https://1loc.dev/#get-the-weekday-of-a-date)

-[x] 68 .获取昨天的日期[#](https://1loc.dev/#get-the-yesterday-date)

-[x] 69 .初始化当前日期但将时间设置为午夜[#](https://1loc.dev/#initialize-the-current-date-but-set-time-to-midnight)

-[x] 70 .对日期数组进行排序[#](https://1loc.dev/#sort-an-array-of-dates)

-[x] **\*\*### 检查一个元素是否是另一个元素的后代\*\***\*\***\***\***[\*\***#\***\*]\*\***\*\***\*\*\*\***(\***\*\*\*\*\*\***\***https://1loc.dev/-[x] #check-if-an-element-is-a-descendant-of-another\*\***)

\*\*

-[x]

-[x] 72 .检查元素是否被聚焦[#](https://1loc.dev/#check-if-an-element-is-focused)

-[x] 73 .检查是否支持触摸事件[#](https://1loc.dev/#check-if-the-touch-events-are-supported)

-[x] 74 .检查用户是否滚动到页面底部[#](https://1loc.dev/#check-if-user-scrolls-to-the-bottom-of-the-page)

-[x] 75 .检测 Internet Explorer 浏览器[#](https://1loc.dev/#detect-internet-explorer-browser)

-[x] 76 .检测 macOS 浏览器[#](https://1loc.dev/#detect-macos-browser)

-[x] 77 .获取元素的所有兄弟[#](https://1loc.dev/#get-all-siblings-of-an-element)

-[x] 78 .获取元素相对于文档的位置[#](https://1loc.dev/#get-the-position-of-an-element-relative-to-the-document)

-[x] 79 .获取选中的文本[#](https://1loc.dev/#get-the-selected-text)

-[x] 80 .返回上一个页面[#](https://1loc.dev/#go-back-to-the-previous-page)

-[x] 81 .隐藏元素[#](https://1loc.dev/#hide-an-element)

-[x] 82 .在另一个元素之后插入一个元素[#](https://1loc.dev/#insert-an-element-after-other-one)

-[x] 83 .在另一个元素之前插入一个元素[#](https://1loc.dev/#insert-an-element-before-other-one)

-[x] 84 .在元素后插入给定的 HTML[#](https://1loc.dev/#insert-given-html-after-an-element)

-[x] 85 .在元素前插入给定的 HTML[#](https://1loc.dev/#insert-given-html-before-an-element)

-[x] 86 .重定向到另一个页面[#](https://1loc.dev/#redirect-to-another-page)

-[x] 87 .重新加载当前页面[#](https://1loc.dev/#reload-the-current-page)

-[x] 88 .替换元素[#](https://1loc.dev/#replace-an-element)

-[x] 89 .滚动到页面顶部[#](https://1loc.dev/#scroll-to-top-of-the-page)

-[x] 90 .序列化表单数据[#](https://1loc.dev/#serialize-form-data)

-[x] 91 .显示元素[#](https://1loc.dev/#show-an-element)

-[x] 92 .从给定文本中去除 HTML[#](https://1loc.dev/#strip-html-from-a-given-text)

-[x] 93 .切换元素[#](https://1loc.dev/#toggle-an-element)

-[x] **\*\*### 功能 94 .箱子处理程序\*\***\*\***\***\***[\*\***#\***\*]\*\***\*\***\*\*\*\***(\***\*\*\*\*\*\***\***https://1loc.dev/#box-handler****)

\*\*

-[x]

-[x] 95 .检查一个值是否是一个函数[#](https://1loc.dev/#check-if-a-value-is-a-function)

-[x] 96 .检查一个值是否是一个生成器函数[#](https://1loc.dev/#check-if-a-value-is-a-generator-function)

-[x] 97 .检查值是否为异步函数[#](https://1loc.dev/#check-if-a-value-is-an-async-function)

-[x] 98 .从左到右组合函数[#](https://1loc.dev/#compose-functions-from-left-to-right)

-[x] 99 .组合函数[#](https://1loc.dev/#compose-functions)

-[x] 100 .创建一个接受单个参数的函数[#](https://1loc.dev/#create-a-function-that-accepts-a-single-argument)

-[x] 101 .创建一个空函数[#](https://1loc.dev/#create-an-empty-function)

-[x] 102 .咖喱函数[#](https://1loc.dev/#curry-a-function)

-[x] 103 .延迟函数的评估[#](https://1loc.dev/#delay-the-evaluation-of-a-function)

-[x] 104 。执行一次函数[#](https://1loc.dev/#execute-a-function-once)

-[x] 105 .翻转函数的参数[#](https://1loc.dev/#flip-the-arguments-of-a-function)

-[x] 106 .身份功能[#](https://1loc.dev/#identity-function)

-[x] 107 .逻辑异或运算符[#](https://1loc.dev/#logical-xor-operator)

-[x] 108 .记住一个函数[#](https://1loc.dev/#memoize-a-function)

-[x] 109 .部分应用函数[#](https://1loc.dev/#partially-apply-a-function)

-[x] 110 .取消函数[#](https://1loc.dev/#uncurry-a-function)

-[x] **\*\*### 数学 111 .计算由两点定义的直线的角度\*\***\*\***\***\***[\*\***#\***\*]\*\***\*\***\*\*\*\***(\***\*\*\*\*\*\***\***https://1loc.dev/-[x] #calculate-the-angle-of-a-line-defined-by-two-points\*\***)

\*\*

-[x]

-[x] 112 。计算两点之间的距离[#](https://1loc.dev/#calculate-the-distance-between-two-points)

-[x] 113 .计算两个数字之间的线性插值[#](https://1loc.dev/#calculate-the-linear-interpolation-between-two-numbers)

-[x] 114 。计算两点之间的中点[#](https://1loc.dev/#calculate-the-midpoint-between-two-points)

-[x] 115 .检查点是否在矩形内[#](https://1loc.dev/#check-if-a-point-is-inside-a-rectangle)

-[x] 116 .检查一个矩形是否包含另一个矩形[#](https://1loc.dev/#check-if-a-rectangle-contains-other-one)

-[x] 117 .检查一个矩形是否与另一个重叠[#](https://1loc.dev/#check-if-a-rectangle-overlaps-other-one)

-[x] 118 .将度数转换为弧度[#](https://1loc.dev/#convert-degrees-to-radians)

-[x] 119 .将弧度转换为度数[#](https://1loc.dev/#convert-radians-to-degrees)

-[x] 120 .标准化某个范围内数字的比率[#](https://1loc.dev/#normalize-the-ratio-of-a-number-in-a-range)

-[x] 121 .将数字四舍五入到给定值的最接近的倍数[#](https://1loc.dev/-[x] #round-a-number-to-the-nearest-multiple-of-a-given-value)

-[x] **\*\*### 杂项 122 .检查代码是否在 NodeJS 中运行\*\***\*\***\***\***[\*\***#\***\*]\*\***\*\***\*\*\*\***(\***\*\*\*\*\*\***\***https://1loc.dev/-[x] #check-if-the-code-is-running-in-node-js\*\***)

\*\*

-[x]

-[x] 123 .检查代码是否在浏览器中运行[#](https://1loc.dev/#check-if-the-code-is-running-in-the-browser)

-[x] 124 。清除所有 cookie[#](https://1loc.dev/#clear-all-cookies)

-[x] 125 .将 3 位颜色转换为 6 位颜色[#](https://1loc.dev/#convert-3-digits-color-to-6-digits-color)

-[x] 126 .将摄氏度转换为华氏度[#](https://1loc.dev/#convert-celsius-to-fahrenheit)

-[x] 127 .将 cookie 转换为对象[#](https://1loc.dev/#convert-cookie-to-object)

-[x] 128 .将华氏度转换为摄氏度[#](https://1loc.dev/#convert-fahrenheit-to-celsius)

-[x] 129 .将十六进制转换为 rgb[#](https://1loc.dev/#convert-hex-to-rgb)

-[x] 130 .将 rgb 颜色转换为十六进制[#](https://1loc.dev/#convert-rgb-color-to-hex)

-[x] 131 .将 URL 参数转换为对象[#](https://1loc.dev/#convert-url-parameters-to-object)

-[x] 132 .解码 JWT 令牌[#](https://1loc.dev/#decode-a-jwt-token)

-[x] 133 .检测暗模式[#](https://1loc.dev/#detect-dark-mode)

-[x] 134 。缓动功能[#](https://1loc.dev/#easing-functions)

-[x] 135 。模拟掷骰子[#](https://1loc.dev/#emulate-a-dice-throw)

-[x] 136 。编码 URL[#](https://1loc.dev/#encode-a-url)

-[x] 137 .生成唯一且递增的 id[#](https://1loc.dev/#generate-an-unique-and-increment-id)

-[x] 138 .获取第一个定义的非空参数[#](https://1loc.dev/#get-the-first-defined-and-non-null-argument)

-[x] 139 .获取 cookie 的值[#](https://1loc.dev/#get-the-value-of-a-cookie)

-[x] 140 .从 URL 获取参数的值[#](https://1loc.dev/#get-the-value-of-a-param-from-a-url)

-[x] 141 .获取字符串中变量的类型[#](https://1loc.dev/#get-type-of-a-variable-in-string)

-[x] 142 .如果页面在 HTTP 中，则将页面重定向到 HTTPS[#](https://1loc.dev/-[x] #redirect-the-page-to-https-if-it-is-in-http)

-[x] 143 .按顺序运行 Promise[#](https://1loc.dev/#run-promises-in-sequence)

-[x] 144 。交换两个变量[#](https://1loc.dev/#swap-two-variables)

-[x] 145 。等待一段时间[#](https://1loc.dev/#wait-for-an-amount-of-time)

-[x] **\*\*### 数字 146 。为数字添加序数后缀\*\***\*\***\***\***[\*\***#\***\*]\*\***\*\***\*\*\*\***(\***\*\*\*\*\*\***\***https://1loc.dev/-[x] #add-an-ordinal-suffix-to-a-number\*\***)

\*\*

-[x]

-[x] 147 .计算斐波那契数列[#](https://1loc.dev/#calculate-fibonacci-numbers)

-[x] 148 .计算参数的平均值[#](https://1loc.dev/#calculate-the-average-of-arguments)

-[x] 149 .计算参数的除法[#](https://1loc.dev/#calculate-the-division-of-arguments)

-[x] 150 .计算一个数的阶乘[#](https://1loc.dev/#calculate-the-factorial-of-a-number)

-[x] 151 .计算集合索引的模数[#](https://1loc.dev/#calculate-the-mod-of-collection-index)

-[x] 152 .计算参数除法的余数[#](https://1loc.dev/#calculate-the-remainder-of-division-of-arguments)

-[x] 153 .计算参数的总和[#](https://1loc.dev/#calculate-the-sum-of-arguments)

-[x] 154 .将数字夹在两个值之间[#](https://1loc.dev/#clamp-a-number-between-two-values)

-[x] 155 .计算两个数之间的最大公约数[#](https://1loc.dev/#compute-the-greatest-common-divisor-between-two-numbers)

-[x] 156 .将数字转换为等效字符[#](https://1loc.dev/#convert-a-number-to-equivalent-characters)

-[x] 157 .将字符串转换为数字[#](https://1loc.dev/#convert-a-string-to-number)

-[x] 158 .将十进制递归转换为二进制[#](https://1loc.dev/#convert-decimal-to-binary-recursively)

-[x] 159 .从数字中获取数字数组[#](https://1loc.dev/#get-the-arrays-of-digits-from-a-number)

-[x] 160 .乘以参数[#](https://1loc.dev/#multiply-arguments)

-[x] 161 .用零前缀整数[#](https://1loc.dev/#prefix-an-integer-with-zeros)

-[x] 162 .将数字四舍五入到给定的位数[#](https://1loc.dev/#round-a-number-to-a-given-number-of-digits)

-[x] 163 .减去参数[#](https://1loc.dev/#subtract-arguments)

-[x] 164 。截断十进制数[#](https://1loc.dev/#truncate-a-number-at-decimal)

-[x] 165 。将数字截断到给定的小数位数而不舍入[#](https://1loc.dev/-[x] #truncate-a-number-to-a-given-number-of-decimal-places-without-rounding)

-[x] **\*\*### 目的 166 。检查多个对象是否相等\*\***\*\***\***\***[\*\***#\***\*]\*\***\*\***\*\*\*\***(\***\*\*\*\*\*\***\***https://1loc.dev/-[x] #check-if-multiple-objects-are-equal\*\***)

\*\*

-[x]

-[x] 167 .创建一个没有属性的空地图[#](https://1loc.dev/#create-an-empty-map-that-does-not-have-properties)

-[x] 168 .从键和值对创建一个对象[#](https://1loc.dev/#create-an-object-from-the-pairs-of-key-and-value)

-[x] 169 .从对象数组中提取属性的值[#](https://1loc.dev/#extract-values-of-a-property-from-an-array-of-objects)

-[x] 170 .获取对象给定路径处的值[#](https://1loc.dev/#get-the-value-at-given-path-of-an-object)

-[x] 171 .一成不变地重命名对象键[#](https://1loc.dev/#immutably-rename-object-keys)

-[x] 172 .反转对象的键和值[#](https://1loc.dev/#invert-keys-and-values-of-an-object)

-[x] 173 .省略对象的属性子集[#](https://1loc.dev/#omit-a-subset-of-properties-from-an-object)

-[x] 174 。选择一个对象的属性子集[#](https://1loc.dev/#pick-a-subset-of-properties-of-an-object)

-[x] 175 .从对象中删除所有空和未定义的属性[#](https://1loc.dev/-[x] #remove-all-null-and-undefined-properties-from-an-object)

-[x] 176 .浅拷贝对象[#](https://1loc.dev/#shallow-copy-an-object)

-[x] 177 .按属性对对象进行排序[#](https://1loc.dev/#sort-an-object-by-its-properties)

-[x] **\*\*### 随机的 178 .生成一个随机布尔值\*\***\*\***\***\***[\*\***#\***\*]\*\***\*\***\*\*\*\***(\***\*\*\*\*\*\***\***https://1loc.dev/-[x] #generate-a-random-boolean\*\***)

\*\*

-[x]

-[x] 179 .在给定范围内生成一个随机浮点数[#](https://1loc.dev/-[x] #generate-a-random-floating-point-number-in-given-range)

-[x] 180 .生成随机十六进制颜色[#](https://1loc.dev/#generate-a-random-hex-color)

-[x] 181 .在给定范围内生成一个随机整数[#](https://1loc.dev/#generate-a-random-integer-in-given-range)

-[x] 182 .生成随机 IP 地址[#](https://1loc.dev/#generate-a-random-ip-address)

-[x] 183 .生成随机符号[#](https://1loc.dev/#generate-a-random-sign)

-[x] 184 .从给定字符生成随机字符串[#](https://1loc.dev/#generate-a-random-string-from-given-characters)

-[x] 185 .使用 Node crypto 模块生成随机字符串[#](https://1loc.dev/-[x] #generate-a-random-string-using-node-crypto-module)

-[x] 186 .生成给定长度的随机字符串[#](https://1loc.dev/#generate-a-random-string-with-given-length)

-[x] 187 .生成随机 UUID[#](https://1loc.dev/#generate-a-random-uuid)

-[x] 188 .生成给定范围内的随机整数数组[#](https://1loc.dev/#generate-an-array-of-random-integers-in-a-given-range)

-[x] 189 .获取一个随机项并将其从数组中删除[#](https://1loc.dev/#get-a-random-item-and-remove-it-from-an-array)

-[x] 190 .从数组中获取随机项[#](https://1loc.dev/#get-a-random-item-from-an-array)

-[x] 191 .获取数组的随机项[#](https://1loc.dev/#get-random-items-of-an-array)

-[x] 192 .选择一个对象的随机属性[#](https://1loc.dev/#pick-a-random-property-of-an-object)

-[x] 193 .从文本文档中选择随机行[#](https://1loc.dev/#pick-random-lines-from-a-text-document)

-[x] **\*\*### 细绳 194 .将字符串大写\*\***\*\***\***\***[\*\***#\***\*]\*\***\*\***\*\*\*\***(\***\*\*\*\*\*\***\***https://1loc.dev/#capitalize-a-string****)

\*\*

-[x]

-[x] 195 .检查路径是否是相对的[#](https://1loc.dev/#check-if-a-path-is-relative)

-[x] 196 .检查字符串是否由重复的字符序列组成[#](https://1loc.dev/-[x] #check-if-a-string-consists-of-a-repeated-character-sequence)

-[x] 197 .检查字符串是否为回文[#](https://1loc.dev/#check-if-a-string-is-a-palindrome)

-[x] 198 .检查一个 URL 是否是绝对的[#](https://1loc.dev/#check-if-a-url-is-absolute)

-[x] 199 .检查两个字符串是否是字谜[#](https://1loc.dev/#check-if-two-strings-are-anagram)

-[x] 200 .将字母转换为关联表情符号[#](https://1loc.dev/#convert-a-letter-to-associate-emoji)

-[x] 201 .将字符串转换为驼峰式大小写[#](https://1loc.dev/#convert-a-string-to-camel-case)

-[x] 202 .将字符串转换为 PascalCase[#](https://1loc.dev/#convert-a-string-to-pascal-case)

-[x] 203 .将字符串转换为 URL slug[#](https://1loc.dev/#convert-a-string-to-url-slug)

-[x] 204 .将 Windows 文件路径转换为 Unix 路径[#](https://1loc.dev/#convert-a-windows-file-path-to-unix-path)

-[x] 205 .将 camelCase 转换为 kebab-case，反之亦然[#](https://1loc.dev/-[x] #convert-camel-case-to-kebab-case-and-vice-versa)

-[x] 206 .将 snake_case 转换为 camelCase[#](https://1loc.dev/#convert-snake-case-to-camel-case)

-[x] 207 .将 Excel 列的名称转换为数字[#](https://1loc.dev/#convert-the-name-of-an-excel-column-to-number)

-[x] 208 .计算字符串中的单词数[#](https://1loc.dev/#count-the-number-of-words-in-a-string)

-[x] 209 .计算字符串中某个字符的出现次数[#](https://1loc.dev/#count-the-occurrences-of-a-character-in-a-string)

-[x] 210 .对字符串进行大写[#](https://1loc.dev/#decapitalize-a-string)

-[x] 211 .转义 HTML 特殊字符[#](https://1loc.dev/#escape-html-special-characters)

-[x] 212 .生成一个字符串的哈希[#](https://1loc.dev/#generate-a-hash-of-a-string)

-[x] 213 .获取不带任何参数的基本 URL[#](https://1loc.dev/#get-the-base-url-without-any-parameters)

-[x] 214 .从文件名中获取文件扩展名[#](https://1loc.dev/#get-the-file-extension-from-a-file-name)

-[x] 215 .从 URL 获取文件名[#](https://1loc.dev/#get-the-file-name-from-a-url)

-[x] 216 .获取字符串的长度（以字节为单位）[#](https://1loc.dev/#get-the-length-of-a-string-in-bytes)

-[x] 217 .获取字符串中某个字符的个数[#](https://1loc.dev/#get-the-number-of-a-character-in-a-string)

-[x] 218 .使字符串的第一个字符小写[#](https://1loc.dev/#make-the-first-character-of-a-string-lowercase)

-[x] 219 .规范化文件路径斜线[#](https://1loc.dev/#normalize-file-path-slashes)

-[x] 220 .为文本文档的每一行添加一个行号[#](https://1loc.dev/#prepend-a-line-number-to-each-line-of-a-text-document)

-[x] 221 .删除文本文档的重复行[#](https://1loc.dev/#remove-duplicate-lines-of-a-text-document)

-[x] 222 .删除文本文档的空行[#](https://1loc.dev/#remove-empty-lines-of-a-text-document)

-[x] 223 .从字符串中删除空格[#](https://1loc.dev/#remove-spaces-from-a-string)

-[x] 224 。重复一个字符串[#](https://1loc.dev/#repeat-a-string)

-[x] 225 .用 br 元素替换所有换行符[#](https://1loc.dev/#replace-all-line-breaks-with-br-elements)

-[x] 226 。用空格替换所有制表符[#](https://1loc.dev/#replace-all-tab-characters-with-spaces)

-[x] 227 .用一个空格替换多个空格[#](https://1loc.dev/#replace-multiple-spaces-with-a-single-space)

-[x] 228 .用另一个字符替换字符串的第一个给定字符数[#](https://1loc.dev/-[x] #replace-the-first-given-number-of-characters-of-a-string-with-another-character)

-[x] 229 .反转字符串[#](https://1loc.dev/#reverse-a-string)

-[x] 230 .反转文本行的顺序[#](https://1loc.dev/#reverse-the-order-of-lines-of-a-text)

-[x] 231 .按字母顺序对文本文档的行进行排序[#](https://1loc.dev/-[x] #sort-lines-of-a-text-document-in-the-alphabetical-order)

-[x] 232 .按字母顺序对字符串的字符进行排序[#](https://1loc.dev/-[x] #sort-the-characters-of-a-string-in-the-alphabetical-order)

-[x] 233 。从字符串中去除 ANSI 代码[#](https://1loc.dev/#strip-ansi-codes-from-a-string)

-[x] 234 。交换字符串中字符的大小写[#](https://1loc.dev/#swap-case-of-characters-in-a-string)

-[x] 235 。在字符串的开头和结尾修剪斜线[#](https://1loc.dev/#trim-slashes-at-the-beginning-and-the-end-of-a-string)

-[x] 236 。修剪一些字符[#](https://1loc.dev/#trim-some-character)

-[x] 237 .从文件名中修剪文件扩展名[#](https://1loc.dev/#trim-the-file-extension-from-a-file-name)

-[x] 238 .在完整单词处截断字符串[#](https://1loc.dev/#truncate-a-string-at-full-words)

-[x] 239 .取消转义 HTML 特殊字符[#](https://1loc.dev/#unescape-html-special-characters)

-[x] 240 .大写字符串中每个单词的第一个字符[#](https://1loc.dev/-[x] #uppercase-the-first-character-of-each-word-in-a-string)

-[x] **\*\*### 验证器 241 .检查日期是否为工作日\*\***\*\***\***\***[\*\***#\***\*]\*\***\*\***\*\*\*\***(\***\*\*\*\*\*\***\***https://1loc.dev/-[x] #check-if-a-date-is-a-weekday\*\***)

\*\*

-[x]

-[x] 242 .检查日期是否是周末[#](https://1loc.dev/#check-if-a-date-is-a-weekend)

-[x] 243 。检查日期是否在两个日期之间[#](https://1loc.dev/#check-if-a-date-is-between-two-dates)

-[x] 244 。检查日期是否是今天[#](https://1loc.dev/#check-if-a-date-is-today)

-[x] 245 。检查日期是否出现在当年[#](https://1loc.dev/#check-if-a-date-occurs-in-the-current-year)

-[x] 246 。检查平面数组是否有重复值[#](https://1loc.dev/#check-if-a-flat-array-has-duplicate-values)

-[x] 247 .检查给定的整数是否是素数[#](https://1loc.dev/#check-if-a-given-integer-is-a-prime-number)

-[x] 248 .检查一个数字是否是 2 的幂[#](https://1loc.dev/#check-if-a-number-is-a-power-of-2)

-[x] 249 .检查数字是否为偶数[#](https://1loc.dev/#check-if-a-number-is-even)

-[x] 250 .检查数字是否在给定范围内[#](https://1loc.dev/#check-if-a-number-is-in-a-given-range)

-[x] 251 .检查数字是否为负数[#](https://1loc.dev/#check-if-a-number-is-negative)

-[x] 252 .检查数字是否为奇数[#](https://1loc.dev/#check-if-a-number-is-odd)

-[x] 253 .检查数字是否为正数[#](https://1loc.dev/#check-if-a-number-is-positive)

-[x] 254 .检查字符串是否包含小写字符[#](https://1loc.dev/#check-if-a-string-contains-lower-case-characters)

-[x] 255 .检查字符串是否仅包含 ASCII 字符[#](https://1loc.dev/#check-if-a-string-contains-only-ascii-characters)

-[x] 256 .检查字符串是否只包含数字[#](https://1loc.dev/#check-if-a-string-contains-only-digits)

-[x] 257 .检查字符串是否只包含字母和数字[#](https://1loc.dev/#check-if-a-string-contains-only-letters-and-numbers)

-[x] 258 .检查字符串是否只包含字母[#](https://1loc.dev/#check-if-a-string-contains-only-letters)

-[x] 259 .检查字符串是否包含大写字符[#](https://1loc.dev/#check-if-a-string-contains-upper-case-characters)

-[x] 260 .检查字符串是否包含空格[#](https://1loc.dev/#check-if-a-string-contains-whitespace)

-[x] 261 .检查字符串是否为十六进制颜色[#](https://1loc.dev/#check-if-a-string-is-a-hexadecimal-color)

-[x] 262 。检查字符串是否为十六进制数[#](https://1loc.dev/#check-if-a-string-is-a-hexadecimal-number)

-[x] 263 .检查字符串是否是 MongoDB ObjectId[#](https://1loc.dev/#check-if-a-string-is-a-mongo-db-object-id)

-[x] 264 。检查字符串是否为八进制数[#](https://1loc.dev/#check-if-a-string-is-an-octal-number)

-[x] 265 。检查字符串是否为小写[#](https://1loc.dev/#check-if-a-string-is-lower-case)

-[x] 266 。检查字符串是否为大写[#](https://1loc.dev/#check-if-a-string-is-upper-case)

-[x] 267 .检查值是否是业务标识符代码[#](https://1loc.dev/#check-if-a-value-is-a-business-identifier-code)

-[x] 268 .检查值是否为数字[#](https://1loc.dev/#check-if-a-value-is-a-number)

-[x] 269 .检查一个值是否是一个普通对象[#](https://1loc.dev/#check-if-a-value-is-a-plain-object)

-[x] 270 .检查值是否为正则表达式[#](https://1loc.dev/#check-if-a-value-is-a-regular-expression)

-[x] 271 .检查值是否为字符串[#](https://1loc.dev/#check-if-a-value-is-a-string)

-[x] 272 .检查一个值是否是一个对象[#](https://1loc.dev/#check-if-a-value-is-an-object)

-[x] 273 .检查值是否为 base32 编码[#](https://1loc.dev/#check-if-a-value-is-base32-encoded)

-[x] 274 。检查值是否为 base58 编码[#](https://1loc.dev/#check-if-a-value-is-base58-encoded)

-[x] 275 .检查值是否为 base64 编码[#](https://1loc.dev/#check-if-a-value-is-base64-encoded)

-[x] 276 .检查值是否为零[#](https://1loc.dev/#check-if-a-value-is-nil)

-[x] 277 .检查一年是否是闰年[#](https://1loc.dev/#check-if-a-year-is-leap-year)

-[x] 278 .检查所有数组元素是否等于给定值[#](https://1loc.dev/-[x] #check-if-all-array-elements-are-equal-to-a-given-value)

-[x] 279 .检查数组中的所有项是否相等[#](https://1loc.dev/#check-if-all-items-in-an-array-are-equal)

-[x] 280 .检查数组是否包含匹配某些条件的值[#](https://1loc.dev/-[x] #check-if-an-array-contains-a-value-matching-some-criterias)

-[x] 281 .检查数组是否为空[#](https://1loc.dev/#check-if-an-array-is-not-empty)

-[x] 282 .检查一个数组是否是其他数组的子集[#](https://1loc.dev/#check-if-an-array-is-subset-of-other-array)

-[x] 283 .检查一个对象是否是一个 Promise[#](https://1loc.dev/#check-if-an-object-is-a-promise)

-[x] 284 .检查对象是否为数组[#](https://1loc.dev/#check-if-an-object-is-an-array)

-[x] 285 .检查对象是否为空[#](https://1loc.dev/#check-if-an-object-is-empty)

-[x] 286 .验证公历日期[#](https://1loc.dev/#validate-a-gregorian-date)

产品

**\*\*-\*\*** \_[**模糊页面**]**\*\*(\*\***https://blur.page/**)

\_

**\*\*-\*\*** \_[**检查浏览器支持**]**\*\*(\*\***https://checkbrowsers.support/**)

\_

**\*\*-\*\*** \_[**表单验证**]**\*\*(\*\***https://formvalidation.io/**)

\_

**\*\*-\*\*** \_[***\*IntersectionObserver 示例\****]**\*\*(\*\***https://intersectionobserver.io/**)

\_

**\*\*-\*\*** \_[***\*反应 PDF 查看器\****]**\*\*(\*\***https://react-pdf-viewer.dev/**)

\_

开源

**\*\*-\*\*** \_[***\*1 个位置\****]**\*\*(\*\***https://1loc.dev/**)

\_

**\*\*-\*\*** \_[***\*CSS 布局\****]**\*\*(\*\***https://csslayout.io/**)

\_

**\*\*-\*\*** \_[**前端技巧**]**\*\*(\*\***https://getfrontend.tips/**)

\_

**\*\*-\*\*** \_[***\*HTML DOM\****]**\*\*(\*\***https://htmldom.dev/**)

\_

**\*\*-\*\*** \_[***\*这个 VS 那个\****]**\*\*(\*\***https://thisthat.dev/**)

\_

跟着我们

**\*\*-\*\*** \_[**GitHub**]**\*\*(\*\***https://github.com/1milligram/**)

\_

**\*\*-\*\*** \_[**推特**]**\*\*(\*\***https://twitter.com/nghuuphuoc/**)

\_

© 2020 — 2021，1 毫克。版权所有。
