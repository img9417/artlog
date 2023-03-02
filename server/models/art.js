const mongoose = require('mongoose');
const { artSchema } = require("../schema/artsSchema");

const Art = mongoose.model('Art', artSchema);

module.exports = { Art };