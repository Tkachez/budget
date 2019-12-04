const router = require('express').Router();
let User = require('../models/user.module');

router.route('/:name/:email').get((req, res) => {
  User.findOne({
    username: req.params.name,
    email: req.params.email
  })
  .then(user => res.json(user))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const image = req.body.image;

  const newUser = new User({
    username,
    email,
    image
  });
  newUser.save()
  .then(() => res.json('User added!'))
  .catch( err => res.status(400).json('Error: ' + err));
});

router.route('/delete/:id').delete((req,res) => {
  User.findByIdAndDelete(req.params.id)
  .then(()=> res.json('User was deleted!'))
  .catch( err => res.status(400).json('Error: ' + err));
});

module.exports = router;