const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/how-many-dragons-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-dragons'
  var howManyDragons = req.session.data['how-many-dragons']

  // Check whether the variable matches a condition
  if (howManyDragons == "3 or more") {
      // Send user to next page
      res.redirect("/dragon-name");
  } else {
      // Send user to ineligible page
      res.redirect("/ineligible");
  }

})

module.exports = router
