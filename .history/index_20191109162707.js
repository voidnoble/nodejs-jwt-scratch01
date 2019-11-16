const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();

const SECRET_KEY = 'secret key';

// 회원 가입 한 유저 정보
let registryUsers = {

};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('JWT_SECRET', SECRET_KEY)