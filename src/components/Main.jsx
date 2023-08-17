import React, { useState } from "react";
import CategoryDropdown from "./Dashboard/CategoryDropdown";
import PopularProductsCarousel from "./Dashboard/PopularProducts";
import GenderDemographicsChart from "./Dashboard/GenderDemographic";
import AgeDistributionChart from "./Dashboard/AgeDemographics";
import MapChart from "./Dashboard/MapChart";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div
      className="w-5/6 p-4 grid grid-cols-5 grid-rows-7 gap-4"
      style={{ gridAutoRows: "1fr", maxHeight: "100vh" }}>
      <div className="p-2 col-span-5 row-span-1 flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <input
            type="text"
            placeholder="Search"
            className="px-2 py-1 border border-gray-300 rounded w-1/3"
          />
          <label className="text-gray-700">Select Category:</label>
          <CategoryDropdown onSelectCategory={handleCategoryChange} />
        </div>
        <div>
          <p className="text-2xl font-bold">{selectedCategory}</p>
        </div>
      </div>
      <div className="col-span-2 row-span-2 bg-white rounded-lg flex justify-center items-center">
        <PopularProductsCarousel className="h-full" />
      </div>
      <div className="col-span-1 row-span-2 border bg-white rounded-lg flex justify-center items-center">
        <GenderDemographicsChart className="h-full" />
      </div>
      <div className="col-span-2 row-span-5 border bg-white rounded-lg items-center">
        <MapChart />
        <div className="p-4" >
        <p className="text-lg mt-30" >Geographic Popularity</p>
        </div>
        
      </div>
      <div className="col-span-3 row-span-3 border bg-white rounded-lg flex justify-center items-center">
        <AgeDistributionChart className="h-full" />
      </div>
    </div>
  );
};

export default Main;
