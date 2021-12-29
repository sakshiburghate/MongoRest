//routes.js
//initialize express router
let router = require('express').Router();
//set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to FirstRest API'
    });
});
//Import Bio Controller
var EmpController = require('./EmpController');
// Bio routes
router.route('/emp')
    .get(EmpController.index)
    .post(EmpController.add);
router.route('/emp/:emp_id')
    .get(EmpController.view)
    .patch(EmpController.update)
    .put(EmpController.update)
    .delete(EmpController.delete);
//Export API routes
module.exports = router;
