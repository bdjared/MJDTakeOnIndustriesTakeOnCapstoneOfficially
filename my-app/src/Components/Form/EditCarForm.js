import React, { useState } from 'react';
import '../../Styles/formindex.css';
import model from "../../Dummydb/dummyCardata";

export const EditCarForm = ({ onSubmit, car }) => {

  // currently hardcoded for the only the first car.
  const [checked, setChecked] = useState(true);
  const [make_model, setName] = useState(car.make_model);
  const [location, setLocation] = useState(car.newSpot);
  const [Vin, setVin] = useState(car.key);
  const [stockNum, setStockNumber] = useState(car.stockNum);

  const handleChange = () => {
    setChecked(!checked);
  }
  const Checkbox = ({ label, value, onChange }) => {
    return (
      <label>
        <input type="checkbox" checked={value} onChange={onChange} />
        {label}
      </label>
    );
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="New Spot">New Spot</label>
        <input 
        className="form-control" 
        id="newSpot"
         />
        <input 
        className="form-control" 
        id="key"
        value={car.key}
         />
        <input 
        className="form-control" 
        id="make_model"
        value={car.make_model}
         />
        <input 
        className="form-control" 
        id="oldSpot"
        value={car.newSpot}
         />
        <input 
        className="form-control" 
        id="stockNum"
        value={car.stockNum}
         />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default EditCarForm