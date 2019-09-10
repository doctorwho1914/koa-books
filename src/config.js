const env = process.env.NODE_ENV || 'development';
const config = {
    development: {
        db: {
            host     : 'localhost',
            user     : 'testuser',
            password : 'pass',
            database : 'books'
        },
        cacheExpire: 10 //10s
    },
    test: {
        db: {
            host     : 'localhost',
            user     : 'testuser',
            password : 'pass',
            database : 'books'
        },
        cacheExpire: 30 //30s
    }
}

module.exports = config[env];
