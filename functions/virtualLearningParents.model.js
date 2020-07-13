const mongoose = require('mongoose');

const VirtualLearningSchema = mongoose.Schema({

    parentName:{type: String},
    childsName: {type: String},
    contacts: {type: String}
},                          
{
    timestamps: true
});

module.exports = mongoose.model('VirtualLearning', VirtualLearningSchema);