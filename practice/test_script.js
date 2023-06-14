// 1. 이벤트 기반

// 호출 스택, 실행 순서
function first() {
    second()
    console.log("첫번째 함수")
}

function second() {
    third()
    console.log("두번째 함수")
}

function third() {
    console.log("세번째 함수")
}


console.log("#1")
first()
console.log("")

// 호출 스택: 첫번째, 두번째, 세번째
// 실행 순서: 세번째, 두번째, 첫번째

// function run() {
//     console.log("3초 후 실행")
// }

// console.log("#2")
// console.log("시작")
// setTimeout(run, 3000)
// console.log("끝")
// console.log("")


// 2. 논블로킹 I/O

// 수정 전
function longRunningTask() { 
    // 오래 걸리는 작업 
    console.log('작업 끝')
}
console.log("#3")
console.log('시작')
longRunningTask()
console.log('다음 작업')
console.log("")
// -> 오래 걸리는 작업이어도 작업이 끝난 후에 다음 작업을 실행

// 수정 후
function longRunningTask() { 
    // 오래 걸리는 작업 
    console.log('작업 끝')
    console.log('')
}
console.log("#4")
console.log('시작')
setTimeout(longRunningTask, 0)
console.log('다음 작업')



