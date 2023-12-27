import React from "react";
import "./formStyles.css"; // Assuming your CSS file is named formStyles.css

const Formone = ({ formData, handleChange, errors, handleNext, editIndex }) => {
  return (
    <div className="form-container">
      <h2>Form 1: Name and Email</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <button onClick={handleNext}>
        {editIndex !== null ? "Update" : "Next"}
      </button>
    </div>
  );
};

export default Formone;
