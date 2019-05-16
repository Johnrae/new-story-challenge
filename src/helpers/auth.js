import { AUTH_TOKEN } from '../constants'

export function isAuthenticated () {
	return localStorage.getItem(AUTH_TOKEN) || false
}
