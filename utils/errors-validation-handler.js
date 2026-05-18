import {validationResult} from "express-validator";
import AppError from "./app-error.js";

// Helper to check validation results
export const handleValidationErrors = (req, res, next) => {
	const errors = validationResult(req)

	if (!errors.isEmpty()) {
		const errorMessages = errors.array().map(err => `${err.path}: ${err.msg}`).join(', ')
		throw new AppError(errorMessages, 400)
	}
	next()
}