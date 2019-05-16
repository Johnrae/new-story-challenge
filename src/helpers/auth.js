import { AUTH_TOKEN } from '../constants'

export function isAuthenticated () {
	return localStorage.getItem(AUTH_TOKEN) || false
}

export function setAuth (obj) {
	console.log(obj)
	let {token} = obj.signInUser
	localStorage.setItem(AUTH_TOKEN, token)
}