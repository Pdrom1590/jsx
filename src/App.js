import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const fetchProduct = async () => {
      // const productList = await productAPI.get
    }
    fetchProduct();
  }, [])

  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
