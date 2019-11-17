const router = require('express').Router();
let Transaction = require('../models/transaction.module');

router.route('/').get((req, res) => {
  Transaction.find()
  .then(transactions => res.json(transactions))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/all/:limit/:skip').get((req, res) => {
  Transaction.find().limit(parseInt(req.params.limit)).skip(parseInt(req.params.skip))
  .then(transactions => res.json(transactions))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/count').get((req, res) => {
  Transaction.countDocuments()
      .then(count => res.json(count))
      .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/all/:option').get((req, res) => {
  Transaction.find({option:req.params.option})
    .then(count => res.json(count))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/:id').delete((req, res) => {
  Transaction.findByIdAndDelete(req.params.id)
    .then(() => res.json('Transaction with id: ' + req.params.id + ' deleted!'))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
  const option = req.body.option;
  const value = req.body.value;
  const comment = req.body.comment;

  const newTransaction = new Transaction({
    option,
    value,
    comment
  });

  newTransaction.save()
  .then(() => res.json('Transaction added!'))
  .catch( err => res.status(400).json('Error: ' + err));
});


module.exports = router;