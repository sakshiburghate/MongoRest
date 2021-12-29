//empModel.js
var mongoose = require('mongoose');
//schema
var EmpSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});
// Export Emp Model
var Emp = module.exports = mongoose.model('emp', EmpSchema);
module.exports.get = function (callback, limit) {
   Emp.find(callback).limit(limit); 
}
