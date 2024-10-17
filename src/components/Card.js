import { BsFillBagFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addItem } from "../Products/redux/slice";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  const dispatch = useDispatch();
  return (
    <>
    
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
          <button
          onClick={(e) =>
            dispatch(addItem({ name: title, price: parseInt(newPrice) }))
          }
         
        >
          Add to cart
        </button>
        </div>
      </section>
    </>
  );
};

export default Card;
