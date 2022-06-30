// import { Provider as AuthProvider } from './context/authContext';
// import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import Layout from './component/Layout';
// import Signup from './pages/Auth/Signup';
// // import Signin from './pages/Auth/Signin';
// import Home from './pages/Welcome/Home';
// import Profile from './component/Profile';
// import UserPosts from './component/UserPosts';
// import { Provider as NotesProvider } from './context/notesContext';
// import AdminProfile from './component/AdminProfile';
// import Login from './pages/Auth/Login';
// import {useAuthContext} from './hooks/useAuthContext' 
// // import PostForm from './component/PostForm';

// function App() {

// 	const {authIsReady, user} = useAuthContext()

// 	return (
// 		{authIsReady , (
// 			<Layout>
// 				<Switch>
// 					<NotesProvider>
// 						<AuthProvider>
// 							<Route path="/" exact>
// 								<Home />
// 							</Route>
// 							<Route path="/signup">
// 								<Signup />
// 							</Route>
// 							<Route path="/signin">
// 								<Login />
// 							</Route>
// 							<Route path="/profile/:userId">
// 								<Profile />
// 							</Route>
// 							<Route path="/adminprofile/:userId">
// 								<AdminProfile />
// 							</Route>
// 							<Route path="/user/post/:userId">
// 								<UserPosts />
// 							</Route> 
// 						</AuthProvider>
// 					</NotesProvider>
// 				</Switch>
// 			</Layout>
// 		)}
// 	);
// }

// export default App;


import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useAuthContext } from "./pages/hooks/useAuthContext";

import Home from "./pages/Welcome/Home";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Navbar from "./component/Navbar";

// function App(){
// 	return(
// 		<BrowserRouter>
// 			<Home />
// 		</BrowserRouter>
		
// 	)
// }

function App() {
	const {authIsReady, user} = useAuthContext()

	return (
		<div className="App">
			{authIsReady && (
				<BrowserRouter>
					<Navbar />
					<Switch>
						<Route exact path="/">
							{!user && <Redirect to="/signin" />}
							{user && <Home />}
							{/* <Home /> */}
						</Route>
						<Route path="/signin">
							{user && <Redirect to="/" />}
							{!user && <Login />}
							{/* <Login /> */}
						</Route>
						<Route path="/signup">
							{user && user.name && <Redirect to="/" />}
							{!user && <Signup />}
							{/* <Signup />	 */}
						</Route>
					</Switch>
				</BrowserRouter>
			)}
		</div>
	);
}

export default App