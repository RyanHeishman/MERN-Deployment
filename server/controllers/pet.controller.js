const Pet = require('../models/pet.model')


module.exports = {
    
    index: (request, response) => {
        response.json({
           message: "Hello World"
        });
    },

    findAllPets: (req, res) => {
        Pet.find({})
            .then((pets) => {
                res.status(200).json(pets)
            })
            .catch((err) => {
                res.status(500).json({message: 'Something went wrong', error:err})
            })
    },

    createPet: (req, res) => {
        Pet.create(req.body)
        .then(pet => res.status(201).json(pet))
        .catch(err => res.status(500).json(err));
    },

    findOnePet: (req, res) => {
        const id = req.params.id
        Pet.findById(id)
        .then(pet => res.status(200).json(pet))
        .catch(err => res.status(500).json(err));
    },

    deletePet: (req, res) => {
        const id = req.params.id
        Pet.deleteOne({_id: id})
        .then(pet => res.status(204).json(pet))
        .catch(err => res.status(500).json(err))
    },

    updatePet: (req, res) => {
        const id = req.params.id
        Pet.findOneAndUpdate({_id: id}, req.body, {new:true, runValidators:true})
        .then(updatedPet => res.status(201).json(updatedPet))
        .catch(err => res.status(500).json(err))

    }
}