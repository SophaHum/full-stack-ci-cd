const cors = require('cors');

const corsOptions = {
    origin: function(origin, callback) {
        const allowedOrigins = [
            'http://localhost',
            'http://localhost:3000',
            'http://localhost:80',
            'http://frontend:3000'
        ];
        
        if (!origin || allowedOrigins.some(allowed => origin.startsWith(allowed))) {
            callback(null, true);
        } else {
            console.warn('CORS blocked origin:', origin);
            callback(null, false);
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204
};

module.exports = cors(corsOptions);
