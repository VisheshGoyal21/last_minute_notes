import { useState } from 'react'
// import { useSignup } from '../../hooks/useSignup'
import { useSignup } from '../hooks/useSignup'

// styles
import styles from './signup.module.css'

export default function Signup() {
  const [name, setName] = useState('');
	const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signup, isPending, error } = useSignup()

  const handleSubmit = (event) => {
    event.preventDefault()
    signup(name, lastname, email, password)
  }

  return (
    <div className="flex flex-row items-center min-h-screen justify-around ">
      <div className="flex-grow flex-col text-center relative invisible md:visible">
        <div className="bg-signUpImage bg-cover min-h-screen bg-center opacity-80 flex items-center justify-center">
          <div className="absolute z-1 px-6 py-10">
            <h1 className="mt-6 text-5xl font-bold text-black-100 mb-6">
              Welcome!
            </h1>
            <p className="mt-2 text-xl text-black-200">
              Create an Account to upload notes!
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-grow md:pl-10 max-w-md md:mx-40 bg-white p-4 shadow-xl mt-20 mr-16 ">
        <form onSubmit={handleSubmit} className={styles['signup-form']}>
          <h2 className="text-2xl mb-4">Create Your Account</h2>
          <label
            htmlFor="First Name"
            class="text-sm font-bold text-gray-700 tracking-wide my-4 ">
            First Name
            <input
              class="text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="text"
              id="First Name"
              placeholder="Enter your First Name"
              onChange={(event) => {
                setName(event.target.value)
              }}
              value={name}
            />
          </label>
          

          <label class="text-sm font-bold text-gray-700 tracking-wide my-4 ">
					  Last Name
            <input
              class="text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="text"
              placeholder="Enter your Last Name"
              onChange={(event) => {
                setLastname(event.target.value);
              }}
              value={lastname}  
            />
          </label>
				  

          <label class="text-sm font-bold text-gray-700 tracking-wide my-4 ">
					  Email
            <input
              class="text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="email"
              placeholder="ex: mail@gmail.com"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              value={email}
            />
				  </label>
				  

          <label class="text-sm font-bold text-gray-700 tracking-wide my-4 ">
					  Password
            <input
              class="text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="password"
              placeholder="min 3 letters"
              onChange={(event) => {
                setPassword(event.target.value);
              }} 
              value={password}
            />
          </label>
				  
				  {/* <br /> */}

          {!isPending && <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-full mt-5">
            <h3 className="">SignUp</h3>
          </button>}
          {isPending && <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-full mt-5" disabled>
            <h3 className="">Loading</h3>
          </button>}
          { error && <p>{error}</p> }
        </form>
      </div>
    </div>
  )
}