import { Redirect } from 'react-router';
import { projectAuth } from '../firebase/config';
import { useState } from 'react';

export const isAuthenticated = () => {
	if (typeof window == 'undefined') {
		return false;
	}
	if (localStorage.getItem('token')) {
		return localStorage.getItem('token');
	} else {
		return false;
	}
};

export const signout = () => {
	if (typeof window !== 'undefined') {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		localStorage.removeItem('role');
		localStorage.removeItem('email');
		localStorage.removeItem('name');
		localStorage.removeItem('lastname');

		<Redirect to="/" />;
	}
};

export const useSignup = () => {
	const [error, setError] = useState(null)
	const [isPending, setIsPending] = useState(false)

	const signup = async (firstName, LastName, email, password) => {
		setError(null)
		setIsPending(true)

		try {
		// signup
		const res = await projectAuth.createUserWithEmailAndPassword(email, password)
		console.log(res.user)

		if (!res) {
			throw new Error('Could not complete signup')
		}

		// add display name to user
		await res.user.updateProfile({ firstName, LastName })

		setIsPending(false)
		setError(null)
		} 
		catch(err) {
		console.log(err.message)
		setError(err.message)
		setIsPending(false)
		}
	}

	return { signup, error, isPending }
}