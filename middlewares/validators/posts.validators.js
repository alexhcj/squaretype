import { param, query, validationResult } from 'express-validator'
import AppError from "../../utils/app-error.js";

// Allowed sort fields whitelist (prevents injection and invalid fields)
const ALLOWED_SORT_FIELDS = ['date', 'title', 'slug', '_id', 'createdAt', 'updatedAt', 'reviews']
const MAX_LIMIT = 100 // Prevent excessive database load
const MAX_OFFSET = 10000 // Reasonable pagination limit

// Helper to check validation results
const handleValidationErrors = (req, res, next) => {
	const errors = validationResult(req)

	if (!errors.isEmpty()) {
		const errorMessages = errors.array().map(err => `${err.path}: ${err.msg}`).join(', ')
		throw new AppError(errorMessages, 400)
	}
	next()
}

export const validateGetPosts = [
	query('limit')
		.optional()
		.isInt({ min: 1, max: MAX_LIMIT })
		.withMessage(`must be an integer between 1 and ${MAX_LIMIT}`)
		.toInt(),

	query('offset')
		.optional()
		.isInt({ min: 0, max: MAX_OFFSET })
		.withMessage(`must be an integer between 0 and ${MAX_OFFSET}`)
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

	query('category')
		.optional()
		.isString()
		.trim()
		.isLength({ min: 1, max: 100 })
		.withMessage('must be a string between 1 and 100 characters'),

	query('search')
		.optional()
		.isString()
		.trim()
		.isLength({ min: 1, max: 200 })
		.withMessage('must be a string between 1 and 200 characters')
		.customSanitizer(value => {
			// Escape special regex characters to prevent regex injection
			return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
		}),

	handleValidationErrors
]

export const validateGetPostBySlug = [
	param('slug')
		.notEmpty()
		.withMessage('is required')
		.isString()
		.trim()
		.matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
		.withMessage('must be a valid URL slug (lowercase letters, numbers, and hyphens only)')
		.isLength({ min: 1, max: 200 })
		.withMessage('must be between 1 and 200 characters'),

	handleValidationErrors
]

export const validateGetPostsByCategory = [
	query('limit')
		.optional()
		.isInt({ min: 1, max: MAX_LIMIT })
		.withMessage(`must be an integer between 1 and ${MAX_LIMIT}`)
		.toInt(),

	query('offset')
		.optional()
		.isInt({ min: 0, max: MAX_OFFSET })
		.withMessage(`must be an integer between 0 and ${MAX_OFFSET}`)
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

	query('category')
		.optional()
		.isString()
		.trim()
		.isLength({ min: 1, max: 100 })
		.withMessage('must be a string between 1 and 100 characters'),

	handleValidationErrors
]

export const validateGetPostsToSwitch = [
	param('slug')
		.notEmpty()
		.withMessage('is required')
		.isString()
		.trim()
		.matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
		.withMessage('must be a valid URL slug (lowercase letters, numbers, and hyphens only)')
		.isLength({ min: 1, max: 200 })
		.withMessage('must be between 1 and 200 characters'),

	handleValidationErrors
]

// No validation needed for getPostsCategories (no parameters)
export const validateGetPostsCategories = [
	handleValidationErrors
]