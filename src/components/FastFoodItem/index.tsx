import { HiShoppingCart } from "react-icons/hi";

import "./fastFoodItem.css";
import { FastFoodItemProps } from "./type";

const FastFoodItem = (props: FastFoodItemProps) => {
  const { name, price, ingredients, imageUrl, delay } = props;

  return (
    <div
      className="card product-card h-100 border-0 shadow-sm pb-1 fade-in-horiz"
      style={{ animationDelay: delay + "s" }}
    >
      <span className="badge badge-end badge-shadow bg-success fs-md fw-medium">
        قیمت: {price.toLocaleString()} تومان
      </span>
      <div className="card__placeholder">
        <img className="card-img-top" src={imageUrl} alt={name} />
      </div>
      <div className="card-body text-center pt-3 pb-4 d-flex flex-column">
        <h5 className="mb-2">{name}</h5>
      </div>
      <div className="fs-m fw-bold text-muted mb-3">{ingredients}</div>
      <button className="btn btn-outline-success btn-sm w-100 mt-auto fw-bold">
        <HiShoppingCart className="fs-5 ms-3" />
        افزودن به سبد خرید
      </button>
    </div>
  );
};

export default FastFoodItem;
