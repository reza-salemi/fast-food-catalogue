import "./App.css";
import Header from "./components/Header";
import CategoryList from "./components/CategoryList";

function App() {
  return (
    <div className="wrapper bg-faded-dark">
      <Header />
      <CategoryList />
    </div>
  );
}

export default App;
