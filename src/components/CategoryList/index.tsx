import { useEffect, useState } from "react";
import axios from "../../services/axios";
import { Categories } from "./type";
import Loading from "../Loading";

const CategoryList = ({ filterItems }: any) => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<Array<Categories>>();

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get("/FoodCategory/categories");
      setCategories(response.data);
      setLoading(false);
    };

    getCategories();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading theme="primary" />;
    }
    return (
      <ul className="nav">
        <li className="nav-item" onClick={() => filterItems()}>
          <a className="nav-link" href="#">
            همه فست فود ها
          </a>
        </li>
        {categories?.map((category) => (
          <li
            className="nav-item"
            key={category.id}
            onClick={() => filterItems(category.id)}
          >
            <a className="nav-link" href="">
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav className="container mt-n5">
      <div
        className="d-flex align-items-center bg-white rounded-3 shadow-lg py-4"
        style={{ height: "80px" }}
      >
        {renderContent()}
      </div>
    </nav>
  );
};

export default CategoryList;
