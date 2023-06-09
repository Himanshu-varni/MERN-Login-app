import jwt from 'jsonwebtoken'
import ENV from '../config.js'

/** auth middleware */
export default async function Auth(req, res, next){
    try {
    
        // access authorize header to validate request
        const token= req.headers.authorization.split(" ")[1];



        // retrive the user details for the logges in user
        const decodedToken = await jwt.verify(token, ENV.JWT_SECRET)
        
        req.user = decodedToken;

        next()
        //res.json(decodedToken);
    } catch (error1) {
        res.status(401).json({ error1 : "Authentication Failed"})

    }
}

export function localVaricables(req, res, next){
    req.app.locals = {
        OTP : null,
        resetSession : false
    }
    next()
}