import { useEffect } from 'react';
import './App.css';
import Button from './components/button';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  useEffect(() => {
    const fetchProduct = async () => {
      // const productList = await productAPI.get
    }
    fetchProduct();
  }, [])

  return (
    <div className="App">
      <h1>Phan Thanh Bình</h1>
      <p>Xin chao tat ca moi nguoi</p>
      <Header></Header>
      <Sidebar></Sidebar>
      <Button></Button>
      <Footer></Footer>
    </div>
  );
}

export default App;
