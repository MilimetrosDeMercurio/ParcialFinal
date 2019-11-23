const express = require('express');
const router = express.Router();

const Animal = require('../models/animal');


router.get('/', async(req, res)=>{
    const animals = await Animal.find();
    res.render('index', {
        animals: animals
    } );
});

router.post('/add', async(req,res)=> {

    const animal = new Animal(req.body);
    
    await animal.save();
    res.redirect('/');
});

router.get('/turn/:id', async (req, res) => {
    const {id} = req.params;
    const animal = Animal.findById(id);
    animal.status = !animal.status;
    await animal.save();
});

router.get('/edit/id', async (req, res)=>{
    const {id} = req.params;
    const animal = Animal.findById(id);
    res.render('edit', {
        animal
    })
})

router.post('/edit/:id', async (req, res) =>{
    const {id} = req.params;
  await animal.update({_id:id}, req.body);
  res.redirect('/');
})


router.get('/delete/:id', async(req,res)=>{
    const {id} = req.params;
    await Animal.remove({_id: id });
res.redirect('/');
    
})

module.exports = router; 