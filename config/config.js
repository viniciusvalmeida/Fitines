require('dotenv').config({ path: './.env.local' })

module.exports = {
  development: {
    dialect: process.env.NEXT_PUBLIC_DB_DIALECT,
    host: process.env.NEXT_PUBLIC_DB_HOST,
    username: process.env.NEXT_PUBLIC_DB_USER,
    password: process.env.NEXT_PUBLIC_DB_PASSWORD,
    database: process.env.NEXT_PUBLIC_DB_NAME,
    define: {
      timestamps: true
    }
  }
}