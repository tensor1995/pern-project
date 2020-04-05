const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const {errorMessage,status} = require('../helpers/status');

dotenv.config();

const verifyToken = async (req,res,next)=>{
    const {token} = req.headers;
    if(!token){
        errorMessage.error = 'Token not provided';
        res.status(status.bad).send(errorMessage);
    }

    try{

    }
    catch(err){

    }
}