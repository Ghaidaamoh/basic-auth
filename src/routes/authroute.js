'use strict';

const express = require('express');
const router = express.Router();
const { UserModel } = require('../models/auth/index')
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const basicAuth = require('../middleware/basicAuth')

async function signUp(req, res) {
    let userData = req.headers.authorization;
    let encoded = userData.split(' ').pop();
    let decoded = base64.decode(encoded);
    let [username, password] = decoded.split(':');
    let oldUser = await User.findOne({ where: { userName: username } });
    if (oldUser) {
        res.status(201).json('Already Exist')
    }
    let newPassword = await bcrypt.hash(password, 10);
    const record = await UserModel.create({ username, password: newPassword });
    res.status(201).json(record);
}


// sign in
router.post('/signin', basicAuth, async (req, res) => {
    let isValid = req.user
    if (isValid) {
        res.status(200).json(user);
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});


router.post('/signup', signUp);

module.exports= router