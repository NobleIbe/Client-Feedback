module.exports = (res,req,next) => {
    if (!req.user){
        return res.status(401).send({error: 'You must login'});
    }

    next();
};