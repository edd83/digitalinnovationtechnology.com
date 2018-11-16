// API

module.exports = function setup(app) {
  app.get('/api/toto', (req, res) => {
    res.send('tata');
  });
};
