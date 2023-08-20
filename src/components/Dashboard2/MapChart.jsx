import React from "react";
import DatamapsIndia from "react-datamaps-india";

const MapChart = () => {
  return (
    <div className="flex flex-col justify-center">
      <div style={{ position: "relative" }}>
        <DatamapsIndia
          style={{ postion: "relative", left: "25%" }}
          regionData={{
            "Andaman & Nicobar Island": { "value": 150 },
            "Andhra Pradesh": { "value": 470 },
            "Arunachal Pradesh": { "value": 248 },
            "Assam": { "value": 528 },
            "Bihar": { "value": 755 },
            "Chandigarh": { "value": 95 },
            "Chhattisgarh": { "value": 1700 },
            "Delhi": { "value": 1823 },
            "Goa": { "value": 508 },
            "Gujarat": { "value": 624 },
            "Haryana": { "value": 1244 },
            "Himachal Pradesh": { "value": 640 },
            "Jammu & Kashmir": { "value": 566 },
            "Jharkhand": { "value": 814 },
            "Karnataka": { "value": 2482 },
            "Kerala": { "value": 899 },
            "Lakshadweep": { "value": 15 },
            "Madhya Pradesh": { "value": 1176 },
            "Maharashtra": { "value": 727 },
            "Manipur": { "value": 314 },
            "Meghalaya": { "value": 273 },
            "Mizoram": { "value": 306 },
            "Nagaland": { "value": 374 },
            "Odisha": { "value": 395 },
            "Puducherry": { "value": 245 },
            "Punjab": { "value": 786 },
            "Rajasthan": { "value": 1819 },
            "Sikkim": { "value": 152 },
            "Tamil Nadu": { "value": 2296 },
            "Telangana": { "value": 467 },
            "Tripura": { "value": 194 },
            "Uttar Pradesh": { "value": 2944 },
            "Uttarakhand": { "value": 1439 },
            "West Bengal": { "value": 1321 }
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
