const bodyParser = require('body-parser');
const router = require('express').Router();
const asyncMiddleware = require('./asyncMiddleware');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));




router.get('/', asyncMiddleware(async (req, res, next) => {
  res.send('Testing!');
}));















module.exports.apiRoutes = router;

