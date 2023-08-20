
import PopularProductsCarousel from "./Dashboard/PopularProducts";
import GenderDemographicsChart from "./Dashboard/GenderDemographic";
import AgeDistributionChart from "./Dashboard/AgeDemographics";
import MapChart from "./Dashboard/MapChart";

const Main = () => {
  
  return (
    <div
      className=" h-full w-full p-4 grid grid-cols-5 grid-rows-7 gap-4"
      style={{ gridAutoRows: "1fr", maxHeight: "100vh" }}
    >
      <div className="col-span-2 row-span-2 bg-white rounded-lg flex justify-center items-center">
        <PopularProductsCarousel className="h-full" />
      </div>
      <div className="col-span-1 row-span-2 border bg-white rounded-lg flex justify-center items-center">
        <GenderDemographicsChart className="h-full" />
      </div>
      <div className="col-span-2 row-span-5 border bg-white rounded-lg items-center">
        <MapChart />
        <div className="p-4">
        <p className="text-lg mt-1">Geographic Popularity</p>
        </div>
      </div>
      <div className="col-span-3 row-span-3 border bg-white rounded-lg flex justify-center items-center">
        <AgeDistributionChart className="h-full" />
      </div>
    </div>
  );
};

export default Main;
