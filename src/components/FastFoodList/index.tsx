import FastFoodItem from "../FastFoodItem";
import { FastFoodItems } from "./type";

const FastFoodList = ({ fastFoodItems }: FastFoodItems) => {
  let delay = 0.1;

  return (
    <div className="row">
      {fastFoodItems.map(({ id, ...fastFoodItem }) => {
        delay += 0.03;
        return (
          <div className="col-md-4 col-sm-6 mb-grid-gutter" key={id}>
            <FastFoodItem {...fastFoodItem} delay={delay} />
          </div>
        );
      })}
    </div>
  );
};

export default FastFoodList;
