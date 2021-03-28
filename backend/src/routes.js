const bodyParser = require('body-parser');
const router = require('express').Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));




















module.exports.apiRoutes = router;

