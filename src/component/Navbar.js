// import { Link } from "react-router-dom";
import { useAuthContext } from "../pages/hooks/useAuthContext";
import { useLogout } from "../pages/hooks/useLogout";

export default function Navbar() {
    const {logout} = useLogout()
    const {user} = useAuthContext()

    return (
        <nav class="fixed flex items-center justify-between z-10 left-0 right-0 top-0 py-4 px-6 max-h-20 bg-cyan-700 shadow-xl">
			<a class=" text-2xl sm:text-4xl font-logo flex-wrap  text-teal-200" href="/">
				RTU-NOTES
			</a>

            {!user && (
             <>
                <div className="border-transparent hover:border-orange-200 hover:text-orange-200 focus:border-yellow-300 px-3 py-2 border-b-4 mx-2">
                    <a class="text-xl font-bold " href="/signin">
                        SignIn
                    </a>
                </div>
                <div className="border-transparent hover:border-orange-200 hover:text-orange-200 focus:border-yellow-300 px-3 py-2 border-b-4 mx-2">
                    <a class="text-xl font-bold " href="/signup">
                        SignUp
                    </a>
                </div>
             </>   
            )}

            {user && (
                <>
                    <p className="mt-2 text-xl text-black-200">Hello, {user.name}</p>
                    <div className="border-transparent hover:border-orange-200 hover:text-orange-200 focus:border-yellow-300 px-3 py-2 border-b-4 mx-2">
						<a
							class="text-xl font-bold hover:text-red-300"
							href="/"
							onClick={() => logout()}>
							Signout
						</a>
					</div>
                </>
            )}

        </nav>
    )
}