import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CreatePost from './components/screens/CreatePost';
import Home from './components/screens/Home';
import Profile from './components/screens/Profile';
import SignIn from './components/screens/SignIn';
import Signup from './components/screens/Signup';

function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route exact path="/" element={<Home />}></Route>
   <Route exact path="/signup" element={<Signup />}></Route>
   <Route exact path="/signin" element={<SignIn />}></Route>
   <Route exact path="/profile" element={<Profile />}></Route>
   <Route path="/create" element={<CreatePost/>}></Route>
   </Routes>
  </BrowserRouter> 
  );
}

export default App;
