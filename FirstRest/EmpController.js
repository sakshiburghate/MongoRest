//EmpController.js
//Import Emp Model
Emp = require('./empModel');
//For index
exports.index = function (req, res) {
    Emp.get(function (err, emp) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got Employyee Successfully!",
            data: emp       
        });
    });
};
//For creating new bio
exports.add = function (req, res) {
    var emp = new Emp();
    emp.name = req.body.name? req.body.name: emp.name;
    emp.email = req.body.email;
    emp.phone = req.body.phone;
    emp.address = req.body.address;
//Save and check error
emp.save(function (err) {
        if (err)
            res.json(err);
res.json({
            message: "New employee Added!",
            data: emp
        });
    });
};
// View Bio
exports.view = function (req, res) {
    Emp.findById(req.params.emp, function (err, emp) {
        if (err)
            res.send(err);
        res.json({
            message: 'Emp Details',
            data: emp
        });
    });
};
// Update Bio
exports.update = function (req, res) {
    Emp.findById(req.params.emp_id, function (err, emp) {
        if (err)
            res.send(err);
            emp.name = req.body.name? req.body.name: emp.name;
            emp.email = req.body.email;
        emp.phone = req.body.phone;
        emp.address = req.body.address;
//save and check errors
emp.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Emp Updated Successfully",
                data: emp
            });
        });
    });
};
// Delete Emp
exports.delete = function (req, res) {
    Emp.deleteOne({
        _id: req.params.emp_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Emp Deleted'
        })
    })
}
