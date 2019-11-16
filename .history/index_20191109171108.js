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
app.get('/', (req, res, next) => {
  let { id, password } = req.query;

  if (!registryUsers[id]) {
    return res.status(401).json({
      msg: 'login failed'
    });
  }

  if (registryUsers[id].password !== password) {
    return res.status(401).json({
      msg: 'login failed'
    });
  }

  let { JWT_SECRET } = app.settings;
  let payload = {
    
  }
});

// 회원가입
app.post('/', (req, res, next) => {
  let { id, password, name } = req.body;

  if (registryUsers[id]) {
    return res.status(200).json({
      msg: '해당 아이디는 이미 등록되어 있습니다.',
    });
  }

  // 유저 정보 저장
  registryUsers[id] = {
    id,
    password,
    name,
  };

  return res.status(201).json({
    msg: 'success',
  });
});

// 로그인 필요한 정보 요청
app.get('/api', loginCheck, (req, res, next) => {});

// 서버 시작
app.listen(3000, () => {
  console.log('STARTING SERVER 3000 PORT');
});
