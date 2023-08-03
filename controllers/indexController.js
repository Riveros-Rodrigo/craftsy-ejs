const indexController = require('../routes/index')

module.exports = {
    index: function(req, res) {
        res.render('index', { title: 'Express' });
    }
}