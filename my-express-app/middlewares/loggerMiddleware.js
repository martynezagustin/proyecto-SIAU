const loggerMiddleware = (req,res,next) => {
    console.log(`${req.method} to ${req.url}`);
    next()
}

module.exports = loggerMiddleware