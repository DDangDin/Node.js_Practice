// #1
// const Koa = require('koa')
// const app = new Koa()

// app.use(ctx => {
//     ctx.body = 'Hello Koa'
// });

// app.listen(4000, () => {
//     console.log('server is listening to port 4000')
// })


// #2
// const Koa = require('koa')
// const app = new Koa()

// app.use((ctx, next) => {
//     console.log(1)
//     next()
// })

// app.use((ctx, next) => {
//     console.log(2)
//     next()
// })

// app.use((ctx, next) => {
//     ctx.body = 'Hello Koa'
// })

// app.listen(4000, () => {
//     console.log('server is listening to port 4000')
// })


// #3
// const Koa = require('koa')
// const app = new Koa()

// app.use(async (ctx, next) => {
//     console.log(1)
//     const started = new Date()
//     await next()
//     console.log(new Date() - started + 'ms')
// })

// app.use((ctx, next) => {
//     console.log(2)
//     next()
// })

// app.use((ctx, next) => {
//     ctx.body = 'Hello Koa'
// })

// app.listen(4000, () => {
//     console.log('server is listening to port 4000')
// })


// #4
// const Koa = require('koa')
// const Router = require('koa-router')

// const app = new Koa()
// const router = new Router()

// router.get('/', (ctx, next) => {
//     ctx.body = '홈'
// })

// app.use(router.routes())
// app.use(router.allowedMethods())

// app.listen(4000, () => {
//     console.log('server is listening to port 4000')
// })


// #5
// const Koa = require('koa')
// const Router = require('koa-router')

// const app = new Koa()
// const router = new Router()

// router.get('/', (ctx, next) => {
//     ctx.body = '홈'
// })

// router.get('/about', (ctx, next) => {
//     ctx.body = '소개'
// })

// router.get('/about/:name', (ctx, next) => {
//     const { name } = ctx.params; // 라우트 경로에서 :파라미터명 으로 정의된 값이 ctx.params 안에 설정됩니다.
//     ctx.body = name + '의 소개'
// })

// router.get('/post', (ctx, next) => {
//     const { id } = ctx.request.query; // 주소 뒤에 ?id=10 이런식으로 작성된 쿼리는 ctx.request.query 에 파싱됩니다.
//     if(id) {
//         ctx.body = '포스트 #' + id
//     } else {
//         ctx.body = '포스트 아이디가 없습니다.'
//     }
// })

// app.use(router.routes()).use(router.allowedMethods())

// app.listen(4000, () => {
//     console.log('server is listening to port 4000')
// })


// #6
const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()
const api = require('./api')

router.use('/api', api.routes()) // api 라우트를 /api 경로 하위 라우트로 설정

app.use(router.routes()).use(router.allowedMethods())

app.listen(4000, () => {
    console.log('server is listening to port 4000')
})