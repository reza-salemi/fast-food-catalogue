import FastFoodItem from "../FastFoodItem";
import { FastFoodItems } from "./type";

const FastFoodList = ({ fastFoodItems }: FastFoodItems) => {
  return (
    <div className="row">
      {fastFoodItems.map(({ id, ...fastFoodItem }) => {
        return (
          <div className="col-md-4 col-sm-6 mb-grid-gutter" key={id}>
            <FastFoodItem {...fastFoodItem} />
          </div>
        );
      })}
    </div>
  );
};

export default FastFoodList;
