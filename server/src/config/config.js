module.exports = {
  db: {
    database: process.env.DB_NAME || 'nodeBlogDb',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'root',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      storage: './node-blog-db.sqlite'
    }
  }
}