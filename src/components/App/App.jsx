import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Header from "../Pages/Hedaer/Header";
import Footer from "../Pages/Footer/Footer";
import NotFound from "../Pages/NotFound/NotFound";
import React, { useEffect, useState } from "react";
import About from "../Pages/About/About";
import Show from "../Pages/About/Show";
import Contact from "../Pages/About/Contact";
import axios from "axios";
import Posts from "../Pages/Posts/Posts";
// import RouterAbout from "../Pages/About/RouterAbout";

export let MyContext = React.createContext();

const App = () => {
  const [login, setLogin] = useState(false);
  const [slider, setSlider] = useState(null);
  const [products, setProducts] = useState(null);
  const [posts, setPosts] = useState(null);

  const fetchSlider = async () => {
    try {
      let res = await axios.get("https://api.escuelajs.co/api/v1/categories");
      setSlider(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const fetchProducts = async () => {
    try {
      let res = await axios.get("https://api.escuelajs.co/api/v1/products");
      setProducts(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const fetchPosts = async () => {
    try {
      let res = await axios.get("https://api.escuelajs.co/api/v1/users");
      setPosts(res.data);
      console.log(res.data);
      
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
      <button
        onClick={() => setLogin(!login)}
        className={
          login === true
            ? "btn !font-bold !inline-flex btn-md relative top-15 left-5 z-10 btn-success"
            : "btn !font-bold !inline-flex btn-md relative top-15 left-5 z-10 btn-error"
        }
      >
        {login === true ? "Log Out" : "Log In"}
      </button>
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
        <Header />
        <MyContext.Provider value={{ slider, products , posts}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/about"
              element={login === true ? <About /> : <Navigate to={"/"} />}
            />
            <Route
              path="/about/:id"
              element={login === true ? <Show /> : <Navigate to={"/"} />}
            />
            <Route
              path="/about/contact"
              element={login === true ? <Contact /> : <Navigate to={"/"} />}
            />
            <Route
              path="/posts"
              element={login === true ? <Posts /> : <Navigate to={"/"} />}
            />
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
