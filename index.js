// 실행 => nodemon index.js
// express 실행
const express = require('express')
const app = express()
const port = 3000

// 접속 로그 출력
const morgan = require('morgan');
app.use(morgan('dev'));

// 폴더 경로 지정
const path = require('path')
app.set('views', path.join(__dirname, 'views'))

// db 연결
const config = require('./config/key')
const { UserInfo } = require('./DB/userInfo')
const mongoose = require('mongoose')

mongoose.connect(config.mongoURI, {
    //useNewUrlParser: true, userUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

/*
app.get('/', (req, res) => {
    res.send('Hello World!')
})
*/

// main - 아이디 유무 확인
app.post('/', (req, res) => {

})




app.listen(port, () => {
    console.log('On Port ...')
})