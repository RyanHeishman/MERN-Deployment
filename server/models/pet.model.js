const mongoose = require("mongoose");
const { object } = require("webidl-conversions");

const PetSchema = new mongoose.Schema({
    
    name: {type: String,
    required: [true, 'You must add a name'],
    minLength: [3, 'Name must be at least 3 characters']
    },
    type: {type: String,
        required: [true, 'You must add a pet type'],
        minLength: [3, 'Pet Type must be at least 3 characters']
    },
    description: {type: String,
        required: [true, 'You must add a pet description'],
        minLength: [3, 'The description must be at least 3 characters']
    },
    skillOne: {type: String,
        required: [false, ''],
        minLength: [0, 'Skill must be at least 3 characters']
    },
    skillTwo: {type: String,
        required: [false, ''],
        minLength: [0, 'Skill must be at least 3 characters']
    },
    skillThree: {type: String,
        required: [false, ''],
        minLength: [0, 'Skill must be at least 3 characters']
    }
}, {timestamps: true});

module.exports = mongoose.model('Pet', PetSchema);