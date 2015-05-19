var config = {};

config.environment = process.env.NODE_ENV ?
                        process.env.NODE_ENV : 'development';

if( config.environment === 'development' ){

    config.socketUrl = 'http://localhost:3000';

} else if( config.environment === 'production' ) {

}

module.exports = config;