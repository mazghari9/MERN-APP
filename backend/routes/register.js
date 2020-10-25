const router = require('express').Router();
let Register = require('../models/register.model');


router.route('/').get((req, res) => {
    Register.find()
      .then(register => res.json(register))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/add').post((req, res) => {
    const username = req.body.username;
    const full_name = req.body.full_name;
    const gmail = req.body.gmail;
    const password = req.body.password;
   
    const newRegister = new Register({
      full_name,
      username,
      gmail,
      password
    });
  
    newRegister.save()
    .then(() => res.json('Register added!'))
    .catch(err => res.status(400).json('Error hhh 9owedtiha: ' + err));
  });



  router.route('/login').get((req, res) => {
  Register.find().then(
    (register) => {
      for(i=0; i<register.length; i++){
      if(register[i].username===req.body.username){
        if(register[i].password===req.body.password){
        res.status(200).json(register[i]);
        console.log("Login is done successfully")
      }}
    }}
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});

  /*router.route('/login').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const register = Register.find(register => register.username === username)

    
    try {
      if(password===register.password) {
        res.send('Success')
      } else {
        res.send('Not Allowed')
      }
    } catch {
      res.status(500).send()
    }
  });*/

  /*router.route('/').get("http://localhost:8888/register",(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    Register.find("username"=== username)
    try {
      if(password===register.password) {
        res.send('Success')
      } else {
        res.send('Not Allowed')
      }
    } catch {
      res.status(500).send()
    }
  })*/

 /* app.get('/foods', async (req, res) => {
  const foods = await Register.find({});

  try {
    res.send(foods);
  } catch (err) {
    res.status(500).send(err);
  }
});*/

  module.exports = router;