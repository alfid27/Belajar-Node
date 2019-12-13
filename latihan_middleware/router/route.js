const adminController = require ('../controller/adminController');
const middleware = require ('../middleware/middleware');

module.exports = app => {
    app.get('/login', adminController.login);
    app.get('/middleware', middleware.validate_user, adminController.proses);
}
