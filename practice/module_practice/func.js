// var.js를 참조

// require 함수 안에 불러올 모듈의 경로를 적어줌
const { odd, even } = require('./var')

function checkOddOrEven(num) {
    
    if (num % 2) { // 홀수면
        return odd
    }
    return even
}

// 모듈을 사용하는 또 다른 모듈 만듦
module.exports = checkOddOrEven