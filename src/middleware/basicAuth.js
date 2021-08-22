'use strict'; 

const bcrypt = require('bcrypt');
const base64 = require('base-64');


module.exports= async(req,res,next)=>{

  let authHeader = req.headers.authorization;
    console.log(authHeader);
    let encoded = authHeader.split(' ').pop();
    
    let decoded = base64.decode(encoded);
    console.log(decoded);
    let [username, password] = decoded.split(':');
    const user = await Users.findOne({ where: { username } });
    const isValid = await bcrypt.compare(password, user.password);
    if (isValid) {
        req.user=user
        next();
    } else {
      next ('Invalid credentials');
    }

  }
 