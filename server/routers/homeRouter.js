const router = require('express').Router();

module.exports = function(windowMessenger) {
  router.get('/', (req, res) => {
    res.sendFile('./index.html')
  })

  return router;
};
