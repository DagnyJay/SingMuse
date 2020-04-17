const router = require('express').Router();
router.use(require('../../config/auth'));
const writingsCtrl = require('../../controllers/writings');

router.get('/', checkAuth, writingsCtrl.index);
router.post('/', checkAuth, writingsCtrl.create);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

module.exports = router;