const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = function(req, res, next) {
    // check the token is being sent in 3 diff ways
    let token = req.get('Authorization') || req.query.token || req.body.token;
    if (token) {
        token = token.replace('Bearer ', '');
        // check to see if token is valid and not expired
        jwt.verify(token, SECRET, function(err, decoded) {
            if(err) {
                next(err);
            } else {
                // it's a valid token, so add user to req
                req.user = decoded.user;
                next();
            }
        });
    } else {
        next();
    }
}
