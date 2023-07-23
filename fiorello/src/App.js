import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import '../src/index.css'
import PageContainer from './containers/PageContainer';
import Navbar from './components/navbar/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from './pages/Detail';
import Card from './pages/Card';
import Login from './components/login/Login';
import { useSelector } from 'react-redux';
import Footer from './components/footer/Footer';



function App() {
  // const user= useSelector((state)=>state.user.user);
  // const {authUser}=user;
  // console.log("user", user);
  // console.log("authuser",authUser)
    return (
    
    <Router>
     
      <PageContainer>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={authUser ?<Home />:<Login />} /> */}
        <Route path="products/:id" element={<Detail />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/" element={<Home />} />
      </Routes>
      </PageContainer>
      <Footer/>
    </Router>

  );
}

export default App;
