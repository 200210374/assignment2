


module.exports = {
  db: 'mongodb://localhost/comp2068-fri',
  secret: 'Some random string used to salt 123',
  ids: {
    facebook: {
      clientID: '1202674773150793',
      clientSecret: '9dd2a26ca2e1c05b2328a1cb2c12a108',
      callbackURL: 'http://localhost:3000/facebook/callback'
    },
    github: {
      clientID: '8f17d6d783210ec26edc',
      clientSecret: '123e1af2f8093fc6102fd2763ab54f98b41e1ded',
      callbackURL: 'http://localhost:3000/github/callback'
    }
  }
  //db: 'mongodb://<dbuser>:<dbpassword>@ds157487.mlab.com:57487/directory'
};
