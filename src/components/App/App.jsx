import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Header from "../Pages/Header/Header";
import Footer from "../Pages/Footer/Footer";
import NotFound from "../Pages/NotFound/NotFound";
import React, { useEffect, useState } from "react";
import About from "../Pages/About/About";
import Show from "../Pages/About/Show";
import Contact from "../Pages/About/Contact";
import axios from "axios";
import Posts from "../Pages/Posts/Posts";
import LoginRequired from "../Pages/LoginRequired/LoginRequired";
import Button from "../shared/Button";
import { MyContext } from "../../context/MyContext";
import { API_ENDPOINTS } from "../../constants/api";
// import RouterAbout from "../Pages/About/RouterAbout";

const App = () => {
  const [login, setLogin] = useState(false);
  const [slider, setSlider] = useState(null);
  const [products, setProducts] = useState(null);
  const [posts, setPosts] = useState(null);

  const fetchSlider = async () => {
    try {
      let res = await axios.get(API_ENDPOINTS.CATEGORIES);
      setSlider(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchProducts = async () => {
    try {
      let res = await axios.get(API_ENDPOINTS.PRODUCTS);
      setProducts(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchPosts = async () => {
    try {
      let res = await axios.get(API_ENDPOINTS.USERS);
      setPosts(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchSlider();
    fetchProducts();
    fetchPosts();
  }, []);
  return (
    <div>
      <Button onClick={() => setLogin(!login)} variant={login ? "success" : "error"} className="relative top-15 left-5 z-10 mb-8">
        {login ? "Log Out" : "Log In"}
      </Button>
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
        <Header />
        <MyContext.Provider value={{ slider, products, posts }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={login === true ? <About /> : <LoginRequired />} />
            <Route path="/about/:id" element={login === true ? <Show /> : <LoginRequired />} />
            <Route path="/about/contact" element={login === true ? <Contact /> : <LoginRequired />} />
            <Route path="/posts" element={login === true ? <Posts /> : <LoginRequired />} />
            {/* <Route path="/about/*" element={<RouterAbout />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MyContext.Provider>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
