const passport = require('passport');
const jwt = require('jsonwebtoken');

function authController(User) {
  function signUp(req, res) {
    console.log(req);
    let user = new User(req.body);
    user.save().then(user => {
        res.status(200).json({ user: 'user created successfully' });
      })
      .catch(user => {
        res.status(400).send({ user: 'adding new user failed' });
      });
  }

  function signIn(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }).
      then(user => {
        if (!user) {
          return res.status(404).json({ auth: 'sign in failed' });
        }

        if (user.password === password) {
          const payload = {
            id: user.id,
            name: user.name
          }
          jwt.sign(payload, 'secret', {
            expiresIn: 600000
          }, (err, token) => {
            if (err) console.error('There is some error in token', err);
            else {
              res.json({
                success: true,
                token: `Bearer ${token}`
              });
            }
          });
        } else {
          return res.status(401).json({ auth: 'sign in failed' });
        }
      });
  }

  return { signUp, signIn };
}

module.exports = authController;