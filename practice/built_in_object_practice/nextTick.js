setImmediate(() => { console.log('immediate') })

process.nextTick(() => { console.log('nextTick') })

setTimeout(() => { console.log('timeout') }, 0)

// Promise를 생성하고 Promise가 resolve 되면 실행
// resolve -> 비동기 작업이 성공적으로 완료됨
Promise.resolve().then(() => console.log('promise'))