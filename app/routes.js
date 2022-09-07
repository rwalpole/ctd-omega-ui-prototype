const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/juggling-balls-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var howManyBalls = req.session.data['how-many-balls']

  // Check whether the variable matches a condition
  if (howManyBalls == "3 or more"){
    // Send user to next page
    res.redirect('/juggling-trick')
  } else {
    // Send user to ineligible page
    res.redirect('/ineligible')
  }

})

router.post('/login-post', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var username = req.session.data['username']
  var password = req.session.data['password']

  // Check whether the variable matches a condition
  if (username != '' && password != ''){
    // Send user to next page
    res.redirect('/edit-set')
  } else {
    // Send user to ineligible page
    res.redirect('/login-invalid')
  }

})

module.exports = router
