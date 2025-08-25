/**
 * Custom error handler for the application errors.
 */

/**
 * throws an error response with the error message and status code
 * @param {*} err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
module.exports = (err, res) => {
    console.error('Error:', err);

    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        success: false,
        message,
    });
};
