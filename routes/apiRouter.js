let Router = require('express').Router;
const apiRouter = Router()
let helpers = require('../config/helpers.js')

let User = require('../db/schema.js').User
let Fave = require('../db/schema.js').Fave

  
  apiRouter
    .get('/users', function(req, res){
      User.find(req.query , "-password", function(err, results){
        if(err) return res.json(err) 
        res.json(results)
      })
    })

  apiRouter
    .get('/users/:_id', function(req, res){
      User.findById(req.params._id, "-password", function(err, record){
        if(err || !record ) return res.json(err) 
        res.json(record)
      })
    })
    .put('/users/:_id', function(req, res){

      User.findByIdAndUpdate(req.params._id, req.body, function(err, record){
          if (err) {
            res.status(500).send(err)
          }
          else if (!record) {
            res.status(400).send('no record found with that id')
          }
          else {
            res.json(Object.assign({},req.body,record))
          }
      })
    })

    .delete('/users/:_id', function(req, res){
      User.remove({ _id: req.params._id}, (err) => {
        if(err) return res.json(err)
        res.json({
          msg: `record ${req.params._id} successfully deleted`,
          _id: req.params._id
        })
      })  
    })

apiRouter
    // Routes for a Model(resource) should have this structure
    // Create one
    .post('/faves', function(req,res) {
      var record = new Fave(req.body)
      record.save(function(err, record){
        if (err) {
          res.status(500).send(err)
        }
        else {
          res.json(record)
        }
      })
    })

    // Read many
    .get('/faves', function(req,res) {
      Fave.find(req.query,function(err,records) {
        if (err) {
          res.status(500).send(err)
        }
        else {
          res.json(records)
        }
      })
    })

    // Delete one
    .delete('/faves/:_id', function(req,res) {
      Fave.remove({_id: req.params._id}, function(err) {
        if (err) {
          res.status(500).json(err)
        }
        else {
          res.json({
            status: 'record with id' + req.params._id + 'successfully deleted!'
          })
        }
      })
    })


module.exports = apiRouter