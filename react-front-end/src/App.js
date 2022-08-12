import React from "react";
import "./App.scss";
import Nav from "./components/Nav";
import { UserContextProvider } from "./context/UserContext";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

//pages
import MainPage from "./routes/main";
import About from "./routes/about";
import Search from "./routes/search2";
import Match from "./routes/match";
import Login from "./routes/login";
import SignUp from "./routes/signup";
import Profile from "./routes/profile";

export default function App() {
  // const [user, setUser] = useState({});
  // const [isLoggedin, setIsLoggedin] = useState(false);

  // const {user, showProfile} = useContext(UserContext);

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     message: 'Click the button to load data!',
  //   }
  // }

  // fetchData = () => {
  //   axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
  //   .then((response) => {
  //     // handle success
  //     console.log(response.data) // The entire response from the Rails API

  //     console.log(response.data.message) // Just the message
  //     this.setState({
  //       message: response.data.message
  //     });
  //   })
  // }
  // render() {
 

  return (
      <UserContextProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/match" element={<Match />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
    </Router>
    </UserContextProvider>
  );
  // }
}
