var User = require('../model/user.model');



module.exports.index = async function(req, res, next) {
    try {
        var users = await User.find()
        res.json(users)
    } catch (err) {
        next(err.message)
    }
}

module.exports.detail = async function(req, res, next) {
    try {
        var users = await User.findById(req.params.id)
        res.json(users)
    } catch (err) {
        next(err.message)
    }
}

module.exports.create = function(req, res, next) {
    res.render('users/create')
}

module.exports.postCreate = async function(req, res, next) {
    try {
        var user = await User.create(req.body);
        res.send(user)
    } catch (err) {
        next(err.message)
    }

}
module.exports.delete = async function(req, res, next) {
    try {
        var user = await User.deleteOne({ '_id': req.params.id })
        res.json(user)
    } catch (err) {
        next(err.message)
    }

}

module.exports.update = async function(req, res, next) {
    try {
        var user = await User.updateMany({ _id: req.params.id }, {
            $set: {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password
            }
        });
        res.json(user);

    } catch (err) {
        next(err.message)
    }


}