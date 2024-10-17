
import "./Products.css";
import {Provider} from 'react-redux';
import { store } from './redux/store';
import Cart from "./redux/Cart";

const Products = ({ result }) => {
  return (
    <>
    
      <section className="card-container">
     <Cart/>
        {result}</section>
    </>
  );
};

export default Products;
