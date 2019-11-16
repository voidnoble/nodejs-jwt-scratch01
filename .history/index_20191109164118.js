const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();

const SECRET_KEY = 'secret key';

// 회원 가입 한 유저 정보
let registryUsers = {};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('JWT_SECRET', SECRET_KEY); // JWT 인코딩/디코딩 위해 필요한 키값

const loginCheck = (req, res, next) => {
  next();
};

// 로그인
app.get('/', (req, res, next) => {});
// 회원가입
app.post('/', (req, res, next) => {
    let { id, password, name } = req.body;

    if (registryUsers[id]) {
      return res.sta
    }
});
// 로그인 필요한 정보 요청
app.get('/api', loginch, (req, res, next) => {});

app.listen(3000, () => {
  console.log('STARTING SERVER 3000 PORT');
});
