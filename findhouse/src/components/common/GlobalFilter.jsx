import Router from "next/router";
// import {
//   addKeyword,
//   addLocation,
// } from "../../features/properties/propertiesSlice";
import PricingRangeSlider from "./PricingRangeSlider";
import CheckBoxFilter from "./CheckBoxFilter";
import GlobalSelectBox from "./GlobalSelectBox";
import { useEffect, useState } from "react";
import axios from "axios";
import Select from 'react-select';

const GlobalFilter = ({ className = "" }) => {
  const [districts, setDistricts] = useState([]);
  // const [districts, setDistricts] = useState([{ districtid: 1, districtname: "Adilabad" },
  // { districtid: 2, districtname: "Kandivali" },
  // { districtid: 3, districtname: "Borivali" },
  // { districtid: 4, districtname: "Malad" },
  // { districtid: 5, districtname: "Andheri" },
  // { districtid: 6, districtname: "Goregaon" },
  // { districtid: 7, districtname: "Ajmer" },
  // { districtid: 8, districtname: "Akola" },
  // { districtid: 9, districtname: "Alappuzha" },
  // { districtid: 10, districtname: "Aligarh" },]);
  const [location, setLocation] = useState();
  const API_KEY = '91f0c5adff9f43f7a51ed1eec6250fef';
  useEffect(() => {
    const fetchPlaces = async () => {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=Maharashtra&key=${API_KEY}&countrycode=in&limit=500`
        
      );
      const results = response.data.results;
      const newDistricts = results.map((result, index) => {
        return {
          districtid: index + 1,
          districtname: result.formatted
        };
      });
      
      setDistricts(newDistricts);
    };
    fetchPlaces();
    console.log(districts);
  }, []);

  // submit handler
  const submitHandler = () => {
    Router.push({
      pathname: "/listing-grid-v1",
      query: { location: location },
    });
    // Router.push("/listing-grid-v1");
  };

  const handleLocationChange = (event) => {
    // console.log(event.value);
    setLocation(event.value);
  };

  // useEffect(() => {
  //   console.log(location);
  // }, [location])
  
  // if(!districts){
  //   return <h1>Load..</h1>
  // }
  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: '20rem'
    })
  };
  const options = districts.map((district) => ({
    value: district.districtname,
    label: district.districtname,
  }));
  return (
    <div className={`home1-advnc-search ${className}`}>
      <ul className="h1ads_1st_list mb0">
        {/* <li className="list-inline-item">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter keyword..."
              onChange={(e) => dispatch(addKeyword(e.target.value))}
            />
          </div>
        </li> */}
        {/* End li */}

        {/* <li className="list-inline-item">
          <div className="search_option_two">
            <div className="candidate_revew_select">
              <select className="selectpicker w100 form-select show-tick">
                <option value="">Property Type</option>
                <option>Apartment</option>
                <option>Bungalow</option>
                <option>Condo</option>
                <option>House</option>
                <option>Land</option>
                <option>Single Family</option>
              </select>
            </div>
          </div>
        </li> */}
        {/* End li */}

        <li className="list-inline-item">
          {/* <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Location"
              onChange={(e) => setLocation(e.target.value)}
            />
            <label>
              <span className="flaticon-maps-and-flags"></span>
            </label>
          </div> */}

          <div>
            <Select value={location} onChange={handleLocationChange} placeholder={location ? location : "Location"} options={options} styles={customStyles} isSearchable/>
              
          </div>
          {/* <div>
            <Select value={location} onChange={handleLocationChange} styles={customStyles} isSearchable>
              <option value="">Location</option>
              {districts.map((district) => (
                <option key={district.districtid} value={district.districtname}>
                  {district.districtname}
                </option>
              ))}
            </Select>
          </div> */}
        </li>
        {/* End li */}

        {/* <li className="list-inline-item">
          <div className="small_dropdown2">
            <div
              id="prncgs"
              className="btn dd_btn"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              <span>Price</span>
              <label htmlFor="InputEmail2">
                <span className="fa fa-angle-down"></span>
              </label>
            </div>
            <div className="dd_content2 dropdown-menu">
              <div className="pricing_acontent">
                <PricingRangeSlider />
              </div>
            </div>
          </div>
        </li> */}
        {/* End li */}

        {/* <li className="custome_fields_520 list-inline-item">
          <div className="navbered">
            <div className="mega-dropdown ">
              <span
                className="dropbtn"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                Advanced <i className="flaticon-more pl10 flr-520"></i>
              </span>

              <div className="dropdown-content dropdown-menu ">
                <div className="row p15">
                  <div className="col-lg-12">
                    <h4 className="text-thm3 mb-4">Amenities</h4>
                  </div>

                  <CheckBoxFilter />
                </div>
                End .row

                <div className="row p15 pt0-xsd">
                  <div className="col-lg-12 col-xl-12">
                    <ul className="apeartment_area_list mb0">
                      <GlobalSelectBox />
                    </ul>
                  </div>
                </div>
                End .row
              </div>
              End .dropdown-menu
            </div>
          </div>
        </li> */}
        {/* End li */}

        <li className="list-inline-item">
          <div className="search_option_button">
            <button
              onClick={submitHandler}
              type="submit"
              className="btn btn-thm"
              disabled={!location}
            >
              Search
            </button>
          </div>
        </li>
        {/* End li */}
      </ul>
    </div>
  );
};

export default GlobalFilter;
