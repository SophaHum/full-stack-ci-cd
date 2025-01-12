const cors = require('cors');

// Request Logger
const requestLogger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    console.log('Query:', req.query);
    next();
};

// Error Handler
const errorHandler = (err, req, res, next) => {
    console.error(`[Error] ${err.stack}`);
    res.status(err.status || 500).json({
        status: 'error',
        message: err.message || 'Internal Server Error',
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
};

// Not Found Handler
const notFoundHandler = (req, res) => {
    res.status(404).json({
        status: 'error',
        message: 'Resource not found'
    });
};

// Response Formatter
const responseFormatter = (req, res, next) => {
    res.sendSuccess = (data, status = 200) => {
        res.status(status).json({
            status: 'success',
            data
        });
    };

    res.sendError = (message, status = 400) => {
        res.status(status).json({
            status: 'error',
            message
        });
    };

    next();
};

// Authentication Check
const authCheck = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
        return res.sendError('No token provided', 401);
    }

    try {
        // Add your token verification logic here
        // const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // req.user = decoded;
        next();
    } catch (error) {
        res.sendError('Invalid token', 401);
    }
};

// Request Validator
const validateRequest = (schema) => {
    return (req, res, next) => {
        try {
            if (schema.body) {
                const { error } = schema.body.validate(req.body);
                if (error) throw error;
            }
            if (schema.query) {
                const { error } = schema.query.validate(req.query);
                if (error) throw error;
            }
            if (schema.params) {
                const { error } = schema.params.validate(req.params);
                if (error) throw error;
            }
            next();
        } catch (error) {
            res.sendError(error.message, 400);
        }
    };
};

// CORS Options
const corsOptions = {
    origin: process.env.ALLOWED_ORIGINS?.split(',') || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    maxAge: 86400 // 24 hours
};

module.exports = {
    requestLogger,
    errorHandler,
    notFoundHandler,
    responseFormatter,
    authCheck,
    validateRequest,
    cors: cors(corsOptions)
};
