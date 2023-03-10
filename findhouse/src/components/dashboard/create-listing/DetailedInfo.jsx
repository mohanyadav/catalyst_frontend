import CheckBoxFilter from "../../common/CheckBoxFilter";

const DetailedInfo = ({
  bathroom,
  setBathroom,
  yearBuilt,
  setYearBuilt,
  amenities,
  setAmenities,
  locality,
  setLocality,
  state,
  setState,
  propertyAge,
  setPropertyAge,
  furnishing,
  setFurnishing,
  tenants,
  setTenants,
  deposit,
  setDeposit,
  foodPreference,
  setFoodPreference,
  balcony,
  setBalcony,
  flatFloor,
  setFlatFloor,
  totalFloors,
  setTotalFloors,
  availableFrom,
  setAvailableFrom,
  facing,
  setFacing,
  monthlyMaintenance,
  setMonthlyMaintenance,
  waterSupply,
  setWaterSupply,
}) => {
  return (
    <div className="row">
      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="bathRooms">Bathrooms</label>
          {/* <input
            type="text"
            className="form-control"
            id="bathrooms"
            placeholder="Enter "
            
          /> */}
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
            id="bathrooms"
            value={bathroom}
            onChange={(e) => setBathroom(e.target.value)}>
            <option data-tokens="Status1">1</option>
            <option data-tokens="Status2">2</option>
            <option data-tokens="Status3">3</option>
            <option data-tokens="Status4">4</option>
            <option data-tokens="Status5">5</option>
            <option data-tokens="Status6">Other</option>
          </select>
        </div>
      </div>
      {/* End .col */}
      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyId">Locality</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Complete Address of property"
            id="locality"
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="furnishing">Furnishing</label>
          {/* <input
            type="text"
            className="form-control"
            id="furnishing"
            
          /> */}
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
            id="furnishing"
            value={furnishing}
            onChange={(e) => setFurnishing(e.target.value)}
          >
            <option data-tokens="Status1">full</option>
            <option data-tokens="Status2">partially</option>
            <option data-tokens="Status3">not</option>
          </select>
        </div>
      </div>
      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="tenants">Tenants</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Number of tetants"
            id="tenants"
            value={tenants}
            onChange={(e) => setTenants(e.target.value)}
          />
        </div>
      </div>
      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="deposit">Deposit</label>
          <input
            type="number"
            className="form-control"
            id="deposit"
            placeholder="Enter Deposit"
            value={deposit}
            onChange={(e) => setDeposit(e.target.value)}
          />
        </div>
      </div>

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyASize">State</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter State"
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="sizePrefix">Property Age</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Property age"
            id="propertyAge"
            value={propertyAge}
            onChange={(e) => setPropertyAge(e.target.value)}
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
  <div className="my_profile_setting_input form-group">
    <label htmlFor="furnishing">Food Preference</label>
    <input
      type="text"
      className="form-control"
      id="furnishing"
      placeholder="Enter Food preference"
      value={foodPreference}
      onChange={(e) => setFoodPreference(e.target.value)}
    />
  </div>
</div>
    {/* End .col */}
      <div className="col-lg-6 col-xl-4">
  <div className="my_profile_setting_input form-group">
    <label htmlFor="furnishing">Balcony</label>
    <input
      type="text"
      className="form-control"
      id="furnishing"
      placeholder="Enter Number of balcony"
      value={balcony}
      onChange={(e) => setBalcony(e.target.value)}
    />
  </div>
</div>
      {/* End .col */}
      <div className="col-lg-6 col-xl-4">
  <div className="my_profile_setting_input form-group">
    <label htmlFor="furnishing">Floor</label>
    <input
      type="text"
      className="form-control"
      placeholder="Enter Number of floor"
      id="furnishing"
      value={flatFloor}
      onChange={(e) => setFlatFloor(e.target.value)}
    />
  </div>
</div>
      {/* End .col */}
      <div className="col-lg-6 col-xl-4">
  <div className="my_profile_setting_input form-group">
    <label htmlFor="furnishing">Total Floors</label>
    <input
      type="text"
      className="form-control"
      id="furnishing"
      placeholder="Enter Total number of floors"
      value={totalFloors}
      onChange={(e) => setTotalFloors(e.target.value)}
    />
  </div>
</div>
      {/* End .col */}
      <div className="col-lg-6 col-xl-4">
  <div className="my_profile_setting_input form-group">
    <label htmlFor="furnishing">Available From</label>
    <input
      type="text"
      className="form-control"
      placeholder="yyyy-mm-dd"
      id="furnishing"
      value={availableFrom}
      onChange={(e) => setAvailableFrom(e.target.value)}
    />
  </div>
</div>
      {/* End .col */}
      <div className="col-lg-6 col-xl-4">
  <div className="my_profile_setting_input form-group">
    <label htmlFor="furnishing">Facing</label>
    <input
      type="text"
      className="form-control"
      placeholder="Property facing direction"
      id="furnishing"
      value={facing}
      onChange={(e) => setFacing(e.target.value)}
    />
  </div>
</div>
      <div className="col-lg-6 col-xl-4">
  <div className="my_profile_setting_input form-group">
    <label htmlFor="furnishing">Monthly Maintainence</label>
    <input
      type="text"
      className="form-control"
      id="furnishing"
      placeholder="Enter Monthly maintainence"
      value={monthlyMaintenance}
      onChange={(e) => setMonthlyMaintenance(e.target.value)}
    />
  </div>
</div>
      {/* End .col */}
      <div className="col-lg-6 col-xl-4">
  <div className="my_profile_setting_input form-group">
    <label htmlFor="furnishing">Water Supply</label>
    <input
      type="text"
      className="form-control"
      id="furnishing"
      placeholder="Enter hours of water supply"
      value={waterSupply}
      onChange={(e) => setWaterSupply(e.target.value)}
    />
  </div>
</div>
      {/* End .col */}

      {/* <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="LASPostfix">Land Area Size Postfix</label>
          <input type="text" className="form-control" id="LASPostfix" />
        </div>
      </div> */}
      {/* End .col */}

      {/* <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="bedRooms">Bedrooms</label>
          <input type="text" className="form-control" id="bedRooms"  />
        </div>
      </div> */}
      {/* End .col */}

      

      {/* <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="garages">Garages</label>
          <input type="text" className="form-control" id="garages" />
        </div>
      </div> */}
      {/* End .col */}

      {/* <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="garagesSize">Garages Size</label>
          <input type="text" className="form-control" id="garagesSize" />
        </div>
      </div> */}
      {/* End .col */}

      {/* <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="yearBuild">Year Built</label>
          <input
            type="text"
            className="form-control"
            id="yearBuild"
            value={yearBuilt}
            onChange={(e) => setYearBuilt(e.target.value)}
          />
        </div>
      </div> */}
      {/* End .col */}

      {/* <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="videoUrl">Video URL</label>
          <input type="text" className="form-control" id="videoUrl" />
        </div>
      </div> */}
      {/* End .col */}
      {/* 
      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="virtualTour">360?? Virtual Tour</label>
          <input type="text" className="form-control" id="virtualTour" />
        </div>
      </div> */}

      <div className="col-xl-12">
        <h4 className="mb10">Amenities</h4>
      </div>

      <CheckBoxFilter amenities={amenities} setAmenities={setAmenities} />

      {/* <div className="col-xl-12">
        <div className="my_profile_setting_input overflow-hidden mt20">
          <button className="btn btn1 float-start">Back</button>
          <button className="btn btn2 float-end">Next</button>
        </div>
      </div> */}
      {/* End .col */}
    </div>
  );
};

export default DetailedInfo;
