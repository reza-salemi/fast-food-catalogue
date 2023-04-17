import "./App.css";
import Header from "./components/Header";
import CategoryList from "./components/CategoryList";
import { useEffect, useState } from "react";
import axios from "./services/axios";
import Loading from "./components/Loading";
import FastFoodList from "./components/FastFoodList";

function App() {
  const [loading, setLoading] = useState(true);
  const [fastFoodItems, setFastFoodItems] = useState();

  const getFastFoodItems = async (categoryId = null) => {
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

  const renderContent = () => {
    if (loading) {
      return <Loading theme="dark" />;
    }
    return <FastFoodList fastFoodItems={fastFoodItems} />;
  };

  return (
    <div className="wrapper bg-faded-dark">
      <Header />
      <CategoryList />
      <div className="container mt-4">{renderContent()}</div>
    </div>
  );
}

export default App;
