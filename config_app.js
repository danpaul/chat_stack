var config = {};

config.environment = process.env.NODE_ENV ?
                        process.env.NODE_ENV : 'development';

if( config.environment === 'development' ){

    // config.socketUrl = 'http://localhost:3000';
    config.socketUrl = 'http://33.33.33.86:8888';    

} else if( config.environment === 'production' ) {

}

module.exports = config;