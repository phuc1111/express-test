var db = require('../db');
const shortid = require('shortid');
module.exports.index = function(req, res) {
    res.render('users/index', {
        users: db.get('users').value()
    })
}
module.exports.search = function(req, res) {
    var q = req.query.q;
    var matchedUser = db.get('users').value().filter(user => {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
    res.render('users/index', {
        users: matchedUser
    })
}
module.exports.create = function(req, res) {
        res.render('users/create')
    }
    // module.exports.get = function(req, res) {
    //     res.render('users/detail', {
    //         users: db.get('users')
    //             .find({ id: parseInt(req.params.id) })
    //             .value()
    //     })
    // }
module.exports.postCreate = function(req, res) {
    req.body.id = shortid.generate();
    db.get('users').push(req.body).write()
    res.redirect('/users')
}