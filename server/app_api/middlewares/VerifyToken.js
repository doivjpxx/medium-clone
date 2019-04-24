var jwt = require('jsonwebtoken');
var config = require('../../config/config');

module.exports.verifyToken = async (req, res, next) => {

    try {
        let token = req.headers.access_token;
        if (!token) {
            return res.status(403).json({
                auth: false,
                message: 'No token provided'
            });
        }

        let decoded = await jwt.verify(token, config.secret);
        if (!decoded) {
            return res.status(500).json({
                auth: false,
                message: 'Failed to authentication token'
            })
        }

        req.id = decoded.id;
        next();

    } catch (e) {
        res.status(500).json({
            status: 0,
            data: {},
            message: 'unknown error : ' + e.message
        });
    }
}