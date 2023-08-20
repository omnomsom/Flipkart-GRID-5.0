import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Main2 from "./components/Main2";
import Header from "./components/Header";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="grid grid-rows-7 grid-cols-6 h-screen">
        {/* #1 Side Div */}
        <div className=" col-start-1 col-end-2 row-start-1 row-end-7">
          <Sidebar />
        </div>

        {/* #2 Header Div */}
        <div className="col-start-2 col-end-7 row-start-1 row-end-2">
          <Header onSelectCategory={handleCategoryChange} />{" "}
          {/* Pass the prop here */}
        </div>

        {/* #3 Main Area Div */}
        <div className=" bg-[#edf2fb] col-start-2 col-end-7 row-start-2 row-end-7">
          {selectedCategory === "Baby & Kids" ? <Main2 /> : <Main />}
        </div>
      </div>
    </div>
  );
}

export default App;
