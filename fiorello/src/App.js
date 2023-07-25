import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import '../src/index.css'
import PageContainer from './containers/PageContainer';
import Navbar from './components/navbar/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from './pages/Detail';
import Card from './pages/Card';
import { useSelector } from 'react-redux';
import Footer from './components/footer/Footer';
import Login from './pages/Login';
import React from "react";
import About from './pages/About';
import Shop from './pages/Shop';


function App() {
  const user = useSelector((state) => state.user.user);
  const { authUser } = user;
  console.log("user", user);
  console.log("authuser", authUser)
  return (

    <Router>
      <Navbar />

      <Routes>



        {/* <Route path="/" element={authUser ?<Home></Home>:<Login></Login>} ></Route> */}
        <Route path="/Login" element={<Login />} />
        <Route path="products/:id" element={<Detail />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/" element={<Home />} />


        <Route path="/About" element={<About />} />


        <Route path="/Shop" element={<Shop/>} />
      </Routes>

      <Footer />
    </Router>

  );
}

export default App;
