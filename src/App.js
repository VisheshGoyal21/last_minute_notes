// import logo from './logo.svg';
import './App.css';
import { Provider as AuthProvider } from './context/authContext';
import {Route} from 'react-router-dom';
import Layout from './component/Layout';
import Signup from './pages/Auth/Signup';
import Signin from './pages/Auth/Signin';
import Home from './pages/Welcome/Home';
import Profile from './component/Profile';
import UserPosts from './component/UserPosts';
import { Provider as NotesProvider } from './context/notesContext';
// import PostForm from './component/PostForm';
// import Home from './pages/Welcome/Home';

function App() { 
  return (
		<Layout>
			<useOutlet>
				<NotesProvider>
					<AuthProvider>
						<Route path="/" exact>
							<Home />
						</Route>
						<Route path="/signup">
							<Signup />
						</Route>
						<Route path="/signin">
							<Signin />
						</Route>
						<Route path="/profile/:userId">
							<Profile />
						</Route> 
						{/* <Route path="/adminprofile/:userId">
							<AdminProfile />
						</Route> */}
						<Route path="/user/post/:userId">
							<UserPosts />
						</Route>
					</AuthProvider>
				</NotesProvider>
			</useOutlet>
		</Layout>
	);
}

// function App() {
//   return (
//     <Home />
//   );
// }

export default App;
