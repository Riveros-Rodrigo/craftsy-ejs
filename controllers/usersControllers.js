module.exports = {
    register: function(req, res) {
        return res.render('register', { title: 'Register' });
    },
    login : function (req,res){
        return res.render('login', { title: 'Login' });
    },
    profile : function (req,res){
        return res.render('profile', { title: 'Profile' });
    }
}