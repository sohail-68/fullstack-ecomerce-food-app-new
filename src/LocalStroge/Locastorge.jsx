// import React, { useState } from "react";

// const Localstorage = () => {
//   const [selectedImages, setSelectedImages] = useState([]);

//   const handleImageChange = (event) => {
//     // When the image input changes, update the selectedImages state with the selected images
//     const files = Array.from(event.target.files);
//     setSelectedImages(files);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (selectedImages.length > 0) {
//       // Do something with the selected images, such as displaying them in the UI or uploading them to a server
//       console.log("Selected images:", selectedImages);
//     } else {
//       console.log("No images selected");
//     }
//   };

//   return (
//     <div>
//       <h2>Multiple Image Input Example</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="file" accept="image/*" multiple onChange={handleImageChange} />
//         <button type="submit">Submit</button>
//       </form>
//       <div>
//         {selectedImages.map((image, index) => (
//           <div key={index}>
//             <h3>Selected Image {index + 1} Preview:</h3>
//             <img
//               src={URL.createObjectURL(image)}
//               alt={`Selected ${index + 1}`}
//               style={{ maxWidth: "100%", height: "auto" }}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Localstorage;

import React, { useState } from "react";

const Locastorge = () => {
  const [select, setselect] = useState([]);
  console.log(select);
  const [d, setD] = useState([]);
  console.log(d);

  const handel = (e) => {
    const image = e.target.files;
    console.log(image);
    d.push(...image);

    setselect(image);
  };
  return (
    <div>
      <input type="file" accept="images/*" onChange={handel} />

      {d &&
        d.map((image, index) => (
          <>
            <img src={URL.createObjectURL(image)} alt="" />
          </>
        ))}
    </div>
  );
};

export default Locastorge;
