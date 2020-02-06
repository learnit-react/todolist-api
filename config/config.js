
module.exports = {
    // ubah DB dengan host mongodb masing-masing
    DB: process.env.HOST ? process.env.HOST : 'localhost',
    APP_PORT: process.env.APP_PORT ? process.env.APP_PORT : 80,
  };