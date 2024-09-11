import './App.css';
import Header from './Components/Header';
import axios from 'axios';
import {useState,useEffect} from 'react';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';

function App() {
  const [products,setProducts]=useState([]);
  const [error , setError]=useState(null);
  const [ filteredProduct , setFilteredProduct ] = useState("");

  const filteredItems = (filteredProduct, products) => {
    if (filteredProduct !== "") {
      return products.filter(item =>
        item.category.toLowerCase().includes(filteredProduct.toLowerCase())
      );
    } else {
      return products;
    }
  };

  useEffect(() => {
    const url = "http://localhost:3000/cakes";
    axios.get(url)
      .then((response) => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
        setError(error);
      });
  }, []);
  
  const displayedProducts =filteredItems(filteredProduct,products);

  return (
    <div className="App">
      {error ? ( <div>Error fetching data : { error.message } </div>
    ) : (
      <>
         <Header setFilteredProduct={setFilteredProduct} />
          <MainContent fillterData={displayedProducts} />
          <Footer/>
     
      </>
    )}
    </div>
  );
}

export default App;