import React from "react";
import DatamapsIndia from "react-datamaps-india";

const MapChart = () => {
  return (
    <div className="flex flex-col justify-center">
      <div style={{ position: "relative" }}>
        <DatamapsIndia
          style={{ postion: "relative", left: "25%" }}
          regionData={{
            "Andaman & Nicobar Island": { "value": 50 }, // Adjusted for Baby & Kids products
            "Andhra Pradesh": { "value": 270 }, // Adjusted for Baby & Kids products
            "Arunachal Pradesh": { "value": 98 }, // Adjusted for Baby & Kids products
            "Assam": { "value": 208 }, // Adjusted for Baby & Kids products
            "Bihar": { "value": 355 }, // Adjusted for Baby & Kids products
            "Chandigarh": { "value": 80 }, // Adjusted for Baby & Kids products
            "Chhattisgarh": { "value": 900 }, // Adjusted for Baby & Kids products
            "Delhi": { "value": 823 }, // Adjusted for Baby & Kids products
            "Goa": { "value": 308 }, // Adjusted for Baby & Kids products
            "Gujarat": { "value": 324 }, // Adjusted for Baby & Kids products
            "Haryana": { "value": 644 }, // Adjusted for Baby & Kids products
            "Himachal Pradesh": { "value": 340 }, // Adjusted for Baby & Kids products
            "Jammu & Kashmir": { "value": 256 }, // Adjusted for Baby & Kids products
            "Jharkhand": { "value": 444 }, // Adjusted for Baby & Kids products
            "Karnataka": { "value": 982 }, // Adjusted for Baby & Kids products
            "Kerala": { "value": 399 }, // Adjusted for Baby & Kids products
            "Lakshadweep": { "value": 10 }, // Adjusted for Baby & Kids products
            "Madhya Pradesh": { "value": 576 }, // Adjusted for Baby & Kids products
            "Maharashtra": { "value": 407 }, // Adjusted for Baby & Kids products
            "Manipur": { "value": 210 }, // Adjusted for Baby & Kids products
            "Meghalaya": { "value": 173 }, // Adjusted for Baby & Kids products
            "Mizoram": { "value": 189 }, // Adjusted for Baby & Kids products
            "Nagaland": { "value": 220 }, // Adjusted for Baby & Kids products
            "Odisha": { "value": 250 }, // Adjusted for Baby & Kids products
            "Puducherry": { "value": 180 }, // Adjusted for Baby & Kids products
            "Punjab": { "value": 392 }, // Adjusted for Baby & Kids products
            "Rajasthan": { "value": 900 }, // Adjusted for Baby & Kids products
            "Sikkim": { "value": 80 }, // Adjusted for Baby & Kids products
            "Tamil Nadu": { "value": 1125 }, // Adjusted for Baby & Kids products
            "Telangana": { "value": 240 }, // Adjusted for Baby & Kids products
            "Tripura": { "value": 105 }, // Adjusted for Baby & Kids products
            "Uttar Pradesh": { "value": 1400 }, // Adjusted for Baby & Kids products
            "Uttarakhand": { "value": 700 }, // Adjusted for Baby & Kids products
            "West Bengal": { "value": 610 }
          }}
          
          hoverComponent={({ value }) => {
            return (
              <div>
                  {value.name}
              </div>
            );
          }}
          mapLayout={{
            legendTitle: "State-wise Popularity",
            startColor: "#a3c6ff", // Use Banana Yellow color
            endColor: "#0060ff", // Use Vivid Orange Peel color
            noDataColor: "#f5f5f5",
            borderColor: "#0048c0", // Use Light Blue color for border
            hoverColor: "#ffde14", // Use Vivid Orange Peel color for hover
            hoverBorderColor: "#2874F0", // Use Light Blue color for hover border
     
          }}
          
          
        />
      </div>
    </div>
  );
};

export default MapChart;
