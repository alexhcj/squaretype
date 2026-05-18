import { query } from 'express-validator'
import {handleValidationErrors} from "../../utils/errors-validation-handler.js";

// Allowed sort fields whitelist (prevents injection and invalid fields)
const ALLOWED_SORT_FIELDS = ['date', 'comments', 'likes', 'createdAt', 'updatedAt']
const MAX_LIMIT = 100 // Prevent excessive database load

export const validateGetRecentPosts = [
	query('limit')
		.optional()
		.isInt({ min: 1, max: MAX_LIMIT })
		.withMessage(`must be an integer between 1 and ${MAX_LIMIT}`)
		.toInt(),

	query('sort')
		.optional()
		.isIn(ALLOWED_SORT_FIELDS)
		.withMessage(`must be one of: ${ALLOWED_SORT_FIELDS.join(', ')}`),

	query('order')
		.optional()
		.isIn(['1', '-1'])
		.withMessage('must be 1 (ascending) or -1 (descending)')
		.toInt(),

	handleValidationErrors
]

// No validation needed for getColophonPosts (no parameters)
export const validateGetColophonPosts = [
	handleValidationErrors
]