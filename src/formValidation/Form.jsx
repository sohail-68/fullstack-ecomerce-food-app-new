import React, { useEffect, useState } from "react";
import "./form.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const Form = ({send}) => {
  console.log(send);
  const [editIndex, setEditIndex] = useState(null);
  const [editdata, setEditData] = useState({});

  const passwordValidation =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  const EmailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gm;

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [submittedData, setSubmittedData] = useState([]);

  const [show, setshow] = useState(false);
  const [error, setEroor] = useState({});
  console.log(submittedData);



  function Handel(e) {
    setData((data) => {
      return { ...data, [e.target.name]: e.target.value };
    });
  }

  function Submit(e) {
    e.preventDefault();

    const NewE = {};
    if (data.firstName === "") {
      NewE.firstName = "Name is required";
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])/.test(data.firstName)) {
      NewE.firstName =
        "First Name must contain at least one uppercase letter and one lowercase letter";
    }

    if (data.lastName === "") {
      NewE.lastName = "LastName is required";
    }

    if (data.email === "") {
      NewE.email = "email is required";
    } else if (!EmailValidation.test(data.email)) {
      NewE.email = "Email should be valid";
    }

    if (data.password === "") {
      NewE.password = "password is required";
    } else if (!passwordValidation.test(data.password)) {
      NewE.password =
        "Must Contain 8 Characters, One Uppercase,One Lowercase,One Number and One Special Character";
    } else if (data.password.length < 1) {
      NewE.password = "Password is too Short";
    }

    if (data.password === "") {
      NewE.confirmPassword = "Confirm Password is required";
    }
    if (data.confirmPassword !== data.password) {
      NewE.confirmPassword = "Passwords do not match";
    }

    setEroor(NewE);

    if (Object.keys(NewE).length === 0) {
      if (editIndex !== null) {
        const updatedData = [...submittedData];
        console.log(updatedData);
        if ((updatedData[editIndex] = data)) {
          setSubmittedData(updatedData);
          setEditIndex(null);
        }
      } else {
        setSubmittedData([...submittedData, data]);

      }


      setshow(true);
      setData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  }
  console.log(submittedData);





  const Dlt = (index) => {
    const updatedData = [...submittedData];

    updatedData.splice(index, 1);

    setSubmittedData(updatedData);
  }








  console.log(editIndex);







  const handleEdit = (item, index) => {

    console.log(item);
    setEditData(item);
    setEditIndex
    (index);
    setData(item);
    console.log(editIndex);


  };










  return (
    <>
      <div className="flex">
        <form>
          <div className="parent">
            <h3>React Valdation </h3>

            <div>
              <div>firstName</div>
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={data.firstName}
                  onChange={Handel}
                />
                {error.firstName && (
                  <span className="higlight">{error.firstName}</span>
                )}
              </div>
            </div>

            <div>
              <div>LastName</div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={data.lastName}
                  onChange={Handel}
                />
                {error.lastName && (
                  <span className="higlight">{error.lastName}</span>
                )}
              </div>
            </div>
          </div>

          <div className="parent">
            <div>
              <div>Email</div>
              <div>
                <input
                  type="text"
                  name="email"
                  value={data.email}
                  onChange={Handel}
                />
                {error.email && <span className="higlight">{error.email}</span>}
              </div>
            </div>

            <div>
              <div>Password</div>
              <div>
                <input
                  type="text"
                  name="password"
                  value={data.password}
                  onChange={Handel}
                />
                {error.password && (
                  <span className="higlight">{error.password}</span>
                )}
              </div>
            </div>
          </div>

          <div className="parent">
            <div>
              <div>Confirm Password</div>
              <div>
                <input
                  type="text"
                  name="confirmPassword"
                  value={data.confirmPassword}
                  onChange={Handel}
                />
                {error.confirmPassword && (
                  <span className="higlight">{error.confirmPassword}</span>
                )}
              </div>
            </div>

            <div>
              <div></div>
              <div>
                <button onClick={Submit}>
                  {editIndex !== null ? "Update" : "Submit"}
                </button>
              </div>
            </div>

            <div></div>
          </div>
        </form>

        <div></div>
      </div>
      <div>
        <h3>Data Table</h3>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Password</th>
              <th>ConfirmPassword</th>
              <th>delte</th>
              <th>upadte</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.map((item, index) => (
              <tr key={index}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>{item.confirmPassword}</td>
                <td>
                  <MdDelete onClick={() => Dlt(index)} />
                </td>
                <td>
                  <CiEdit onClick={() => handleEdit(item, index)} />
                </td>
                <td>{/* <CiEdit onClick={()=>edit(item,index)}/>  */}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Form;

// const Table = ({ newData,}) => {
//   console.log(newData);

//   const [tableData, setTableData] = useState([]);
//   const [newdata, setnewdata] = useState([]);
//   console.log(newdata);

//   // const Handel = (index) => {
//   //   const updatedData = [...tableData];

//   //   updatedData.splice(index, 1);

//   //   setTableData(updatedData);
//   // };

//   // useEffect(() => {
//   //   setTableData(newData);
//   // }, [newData]);

//   // const edit=(item,i)=>{
//   //   console.log("iiiiiiiiiiiii",item,i);
//   //   setnewdata(item)

//   // }

// };
