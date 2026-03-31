const errorHandler = (err, req, res, next) => {
	// Default values
	let statusCode = err.statusCode || 500
	let message = err.message || 'Internal Server Error'

	// Mongoose bad ObjectId
	if (err.name === 'CastError') {
		statusCode = 400
		message = 'Invalid ID format'
	}

	// Mongoose duplicate key
	if (err.code === 11000) {
		statusCode = 400
		message = 'Duplicate field value'
	}

	// Mongoose validation error
	if (err.name === 'ValidationError') {
		statusCode = 400
		message = Object.values(err.errors)
			.map((val) => val.message)
			.join(', ')
	}

	res.status(statusCode).json({
		statusCode,
		message,
	})
}

export default errorHandler