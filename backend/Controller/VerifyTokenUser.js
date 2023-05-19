import jwt from "jsonwebtoken";

const VerifyTokenUser = (req, res) => {
    const token = req.header('x-auth-token')
    if(!token) return res.status(400).json({
        status: res.statusCode,
        message: 'Access Denied !'
    })
    

    try {
        const verified = jwt.verify(token, process.env.SECRET_KEY)        
        req.user = verified
        res.status(200).json({
            status: res.statusCode,
            message: 'Your Token Still Can Be Access'
        }) 

    }catch(err){
        res.status(400).json({
            status: res.statusCode,
            message: 'Invalid Token !'
        })
    }
}



export default VerifyTokenUser;