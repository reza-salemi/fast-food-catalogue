import "./App.css";
import Header from "./components/Header";
import CategoryList from "./components/CategoryList";
import { useEffect, useState } from "react";
import axios from "./services/axios";
import Loading from "./components/Loading";
import FastFoodList from "./components/FastFoodList";
import SearchBar from "./components/SearchBar";
import notFound from "./assets/images/404.png";

function App() {
  const [loading, setLoading] = useState(true);
  const [fastFoodItems, setFastFoodItems] = useState<any>();

  const getFastFoodItems = async (categoryId: null | number = null) => {
    setLoading(true);
    const response = await axios.get(
      `FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`
    );
    setLoading(false);
    setFastFoodItems(response.data);
  };

  useEffect(() => {
    getFastFoodItems();
  }, []);

  const filterItems = (categoryId: number) => {
    getFastFoodItems(categoryId);
  };

  const searchItems = async (term: string) => {
    setLoading(true);
    const response = await axios.get(
      `/FastFood/search/${term ? "?term=" + term : ""}`
    );
    setLoading(false);
    setFastFoodItems(response.data);
  };

  const renderContent = () => {
    if (loading) {
      return <Loading theme="dark" />;
    }

    if (fastFoodItems.length === 0) {
      return (
        <>
          <div className="alert alert-warning text-center">
            برای کلیدواژه فوق هیچ آیتمی یافت نشد
          </div>
          <img
            className="mx-auto mt-5 d-block"
            src={notFound}
            alt="Not Found Image"
          />
        </>
      );
    }
    return <FastFoodList fastFoodItems={fastFoodItems} />;
  };

  return (
    <div className="wrapper bg-faded-dark">
      <Header />
      <CategoryList filterItems={filterItems}>
        <SearchBar searchItems={searchItems} />
      </CategoryList>
      <div className="container mt-4">{renderContent()}</div>
    </div>
  );
}

export default App;
