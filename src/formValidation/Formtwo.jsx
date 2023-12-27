import React from "react";
import "./formStyles.css"; // Assuming your CSS file is named formStyles.css

const Formtwo = ({ formData, handleChange, errors, handleNext, editIndex }) => {
  return (
    <div className="form-container">
      <h2>Form 2: City and Gender</h2>
      <div>
  <label>City:</label>
  <select name="city" value={formData.city} onChange={handleChange}>
    <option value="">Select City</option>
    <option value="city1">City 1</option>
    <option value="city2">City 2</option>
  </select>
  {errors.city && <span className="error">{errors.city}</span>}
</div>

      <div>
        <label>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <span className="error">{errors.gender}</span>}
      </div>
      <button onClick={handleNext}>
        {editIndex !== null ? "Update" : "Next"}
      </button>
    </div>
  );
};

export default Formtwo;
