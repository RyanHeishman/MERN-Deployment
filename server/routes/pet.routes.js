const PetController = require('../controllers/pet.controller');

module.exports = (app) => {
    app.get('/api', PetController.index);

    app.get('/api/pet', PetController.findAllPets)
    app.get('/api/pet/:id', PetController.findOnePet)
    app.put('/api/updatePet/:id', PetController.updatePet)
    app.post('/api/pet', PetController.createPet)
    app.delete('/api/deletePet/:id', PetController.deletePet)
}

