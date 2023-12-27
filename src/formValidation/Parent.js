import React, { useState } from "react";
import Formone from "./Formone";
import Formtwo from "./Formtwo";
import Table from "./Tabel";

const Parent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    gender: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [tableData, setTableData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (currentPage === 1) {
      if (!formData.name.trim()) {
        valid = false;
        newErrors.name = "Name is required";
      }
      if (!formData.email.trim()) {
        valid = false;
        newErrors.email = "Email is required";
      }
    } else if (currentPage === 2) {
      if (!formData.city.trim()) {
        valid = false;
        newErrors.city = "City is required";
      }
      if (!formData.gender.trim()) {
        valid = false;
        newErrors.gender = "Gender is required";
      }
    }

    setFormErrors(newErrors);
    return valid;
  };

  const handleNext = () => {
    if (validateForm()) {
      setCurrentPage(currentPage + 1);
     
    
    }
   
  };

  const handleEdit = (index) => {
    const dataToEdit = tableData[index];
    setFormData({ ...dataToEdit });
    setEditIndex(index);
    setCurrentPage(1);
     setEditIndex(index);
     alert(editIndex)



  };

  const handleSave = () => {
    if (editIndex !== null) {
      const updatedData = [...tableData];
      updatedData[editIndex] = formData;
      setTableData(updatedData);
      setEditIndex(null);

    } else {
      setTableData([...tableData, formData]);
    }
    setFormData({ name: "", email: "", city: "", gender: "" });
    setCurrentPage(1);
  };

  const handleDelete = (index) => {
    const updatedData = [...tableData];
    updatedData.splice(index, 1);
    setTableData(updatedData);
  };

  return (
    <div>
      {currentPage === 1 && (
        <Formone
          formData={formData}
          handleChange={handleChange}
          errors={formErrors}
          handleNext={handleNext}

          editIndex={editIndex}
        />
      )}
      {currentPage === 2 && (
        <Formtwo
          formData={formData}
          handleChange={handleChange}
          errors={formErrors}
          handleNext={handleNext}
          editIndex={editIndex}

        />
      )}
      <button onClick={handleSave} style={{marginTop:'2rem'}}>
Save
    
      </button>

      <Table
        data={tableData}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

    </div>
  );
};

export default Parent;
