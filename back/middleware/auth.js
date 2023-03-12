const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    if (!req.headers || !req.headers.authorization || !req.headers.authorization.split(" ")[1]) {
        res.status(401).json({ mess: 'token non transmit' })
    }
    const token = req.headers.authorization.split(" ")[1]
    try {
        const user = jwt.verify(token, '4561gfd');
        req.user = user
        console.log(req.user)
        next()
    }
    catch {
        res.status(403).json({ mess: 'erreur de token' })
    }
}

function authAdmin(req, res, next) {
    if (!req.headers || !req.headers.authorization || !req.headers.authorization.split(" ")[1]) {
        res.status(401).json({ mess: 'token non transmit' })
    }
    const token = req.headers.authorization.split(" ")[1]
    try {
        const user = jwt.verify(token, '4561gfd');
        req.user = user
        
        req.user.roles.forEach(role => {
            if (role.id_role == 3) {
                next()
            }
        });
    }
    catch {
        res.status(403).json({ mess: 'erreur de token' })
    }
}

module.exports = {auth, authAdmin}