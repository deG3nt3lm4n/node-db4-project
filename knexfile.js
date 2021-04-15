// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './recipes'
    },
    migrations: {
      directory: './Data/migrations'
    },
    seeds:{
      directory: './Data/seeds'
    }
  },

  staging: {
  },

  production: {
  }

};
