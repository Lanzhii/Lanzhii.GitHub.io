function abc() {
  console.log('0')
  setTimeout(() => {
    console.log('1')
  }, 0)
}
setTimeout(() => {
  console.log('4')
}, 0)
let promise = new Promise((resolve, reject) => {
  console.log('2')
  setTimeout(() => {
    console.log('3')
  }, 0)
  resolve()
})
promise.then((res) => {
  console.log('pormise 异步')
})

let promise2 = new Promise((resolve, reject) => {
  console.log('5')
  setTimeout(() => {
    console.log('6')
  }, 20)
  resolve()
})
promise2.then((res) => {
  console.log('7')
  console.log('8')
  setTimeout(() => {
    console.log('10')
  }, 0)
})

console.log('9')
abc()
