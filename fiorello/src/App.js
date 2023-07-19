import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import '../src/index.css'
import PageContainer from './containers/PageContainer';
import Navbar from './components/navbar/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from './pages/Detail';

function App() {

  return (
    <PageContainer>
     
    <Router>
  <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/:id" element={<Detail/>}/>
      </Routes>
    </Router>
    </PageContainer>
  );
}

export default App;
