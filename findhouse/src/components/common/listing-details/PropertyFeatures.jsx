import { useState } from "react";

const PropertyFeatures = ({ amenities }) => {
  // console.log(amenities);
  // const propertyFeatures = [
  //   {
  //     id: 1,
  //     list: ["Air Conditioning", "Barbeque", "Dryer", "Gym", "Laundry"],
  //   },
  //   {
  //     id: 2,
  //     list: ["Lawn", "Microwave", "Outdoor Shower", "Refrigerator", "Sauna"],
  //   },
  //   {
  //     id: 3,
  //     list: ["Swimming Pool", "TV Cable", "Washer", "WiFi", "Window Coverings"],
  //   },
  // ];
  // console.log({amenities});
  const [first, setFirst] = useState({amenities})
  // console.log("first",first)

  if (!first.amenities) {
    return <h1>Load..</h1>;
  }

  return (
    <>
      {/* {propertyFeatures.map((item) => ( */}
        <div className="col-sm-6 col-md-6 col-lg-4" >
          <ul className="order_list list-inline-item">
            {first.amenities.map((val, i) => (
              <li key={i}>
                <span className="flaticon-tick"></span>
                {val}
              </li>
            ))}
          </ul>
        </div>
      {/* // ))} */}
    </>
  );
};

export default PropertyFeatures;
