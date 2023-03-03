const router = require('express').Router();
const verifyToken = require('../../verifyToken/verifyToken')

router.get('api/user',verifyToken ,(req,res) => {
    res.status(200).json(req.user)
})


module.exports = router;