const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'ZaWash Home' });
});

router.post("/", (req, res) => {
  console.log(req.body)
  res.send("The data has been submitted");
});

module.exports = router;

