import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import { useContext, useEffect } from "react";
import { Context, server } from "./main";
import axios from "axios";

function App() {
  const { setUser, isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${server}/users/me`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data);
        setIsAuthenticated(true);
        setLoading(false);
      })
      .catch((err) => {
        setUser({});
        setIsAuthenticated(false);
        setLoading(false);
      });
  }, [isAuthenticated]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
