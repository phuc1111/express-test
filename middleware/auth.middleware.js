var db = require('../db');
module.exports.requireAuth = function(req, res, next) {
    console.log(req.signedCookies.user_id);
    if (!req.cookies.user_id) {
        res.redirect('/auth/login');
        return;
    }
    var user = db.get('users').find({ id: req.signedCookies.user_id }).value();

    if (!user) {
        res.redirect('/auth/login');
        return;
    }
    next();
};