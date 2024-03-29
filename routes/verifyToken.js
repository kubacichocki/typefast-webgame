// Import jsonwebtoken
const jwt = require('jsonwebtoken')

// auth function
function auth (req,res,next){
    const token = req.header('autk-token')
    if(!token) return res.status(401).send('Access Denied')

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified;
        next()
    } catch (error) {
        res.status(400).send('Invalid Token')
    }
}