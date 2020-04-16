const router = require('express').Router();
const writingsCtrl = require('../../controllers/writings');

router.post('/', checkAuth, writingsCtrl.create);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

module.exports = router;