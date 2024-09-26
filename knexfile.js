// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './Data/recipe.db3'
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
