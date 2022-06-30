import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
// import styles from './Login.module.css';

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isPending } = useLogin()
  
    const handleSubmit = (e) => {
      e.preventDefault()
      login(email, password)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-row items-center min-h-screen justify-around ">
                <div className="flex-grow flex-col text-center relative invisible md:visible">
                    <div className="bg-signUpImage bg-cover min-h-screen bg-center opacity-80 flex items-center justify-center">
                        <div className="absolute z-1 px-6 py-10">
                            <h1 className="mt-6 text-5xl font-bold text-black-100 mb-6">
                                Welcome Back!
                            </h1>
                            <p className="mt-2 text-xl text-black-200">Login to access your profile</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col flex-grow md:pl-10 max-w-md md:mx-40 bg-white p-4 shadow-xl mr-16">
                    <h2 className="text-2xl mb-4">Access Your Account</h2>

                    <label class="text-sm font-bold text-gray-700 tracking-wide  my-4 mt-8">
                        Email
                        
                    </label>
                    <input
                            class="text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                            type="text"
                            placeholder="ex: mail@gmail.com"
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    

                    <label class="text-sm font-bold text-gray-700 tracking-wide my-4 mt-8">
                        Password
                        
                    </label>
                    <input
                            class="text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                            type="password"
                            placeholder="min 3 letters"
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    <br />

                    {!isPending && <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-full mt-5">
                        <h3 className="">SignIn</h3>
                    </button>}
                    {isPending && <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-full mt-5" disabled>
                        <h3 className="">Loading</h3>
                    </button>}
                    { error && <p>{error}</p> }
                </div>
            </div>
        </form>
	)
}