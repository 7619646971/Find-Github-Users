import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import User from "./components/users/User";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import GithubState from "./contaxt/github/GithubState";
import AlertState from "./contaxt/alert/AlertState";
import "./App.css";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

const App = () => {
  // const [alert, setAlert] = useState(null);

  //Search Github user
  // const searchUsers = async (text) => {
  //   setLoading(true);
  //   const res = await axios.get(
  //     `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   setUsers(res.data.items);
  //   setLoading(false);
  // };

  //Get singel Github user
  // const getUser = async (username) => {
  //   setLoading(true);
  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   setUser(res.data);
  //   setLoading(false);
  // };

  //Get urers repos
  // const getUserRepos = async (username) => {
  //   setLoading(true);
  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}/repos?per_page=5&sort=created:as&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   setUser(res.data);
  //   setLoading(false);
  // };

  //clear users from dtate
  // const clearUsers = () => {
  //   setUser([]);
  //   setLoading(false);
  // };

  //Aleart masg
  // const showAlert = (msg, type) => {
  //   setAlert({ msg, type });
  //   setTimeout(() => setAlert(null), 2000);
  // };

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Routes>
                <Route exact path='/' Component={Home} />
                <Route exact path='/about' Component={About} />
                <Route exact path='/user/:login' Component={User} />
                <Route path='*' Component={NotFound} />
              </Routes>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
