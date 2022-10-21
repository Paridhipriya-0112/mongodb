const mongoose     = require('mongoose')
const Schema       = mongoose.Schema

const StudentSchema  =new Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    roll: {
        type: Number
    },
    class: {
        type: Number
    },
    phone: {
        type: String
    },
    address: {
        type: String
    }
}, {timestamps: true})    

const Student = mongoose.model('Student', StudentSchema)
module.exports = Student