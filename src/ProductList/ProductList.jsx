// import React, { useState } from 'react';

// const products = [
//   {
//     id: 1,
//     name: 'Product 1',
//     price: 99.99,
//     image: 'product1.jpg',
//   },
//   {
//     id: 2,
//     name: 'Product 2',
//     price: 149.99,
//     image: 'product2.jpg',
//   },
//   // Add more products as needed
// ];

// function ProductList() {
//   const [sortedProducts, setSortedProducts] = useState(products);
//   const [sortOrder, setSortOrder] = useState('asc');

//   const handleSortChange = (e) => {
//     const newSortOrder = e.target.value;
//     setSortOrder(newSortOrder);
//     const sorted = [...sortedProducts].sort((a, b) => {
//       if (newSortOrder === 'asc') {
//         return a.price - b.price;
//       } else {
//         return b.price - a.price;
//       }
//     });


//     setSortedProducts(sorted);
//   };

//   return (
//     <div className="ProductList">
//       <div>
//         <label>
//           Sort by price:
//           <select value={sortOrder} onChange={handleSortChange}>
//             <option value="asc">Low to High</option>
//             <option value="desc">High to Low</option>
//           </select>
//         </label>
//       </div>
//       {sortedProducts.map((product) => (
//         <div key={product.id} className="Product">
//           <img src={product.image} alt={product.name} />
//           <h2>{product.name}</h2>
//           <p>${product.price.toFixed(2)}</p>
//           <button>Add to Cart</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProductList;




// ===========================================




import React, { useState } from 'react';

const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 99.99,
      image: 'product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 149.99,
      image: 'product2.jpg',
    },
    {
        id: 3,
        name: 'Product 2',
        price: 149.99,
        image: 'product2.jpg',
      }, {
        id: 4,
        name: 'Product 2',
        price: 149.99,
        image: 'product2.jpg',
      }, {
        id: 5,
        name: 'Product 2',
        price: 149.99,
        image: 'product2.jpg',
      }, {
        id: 6,
        name: 'Product 2',
        price: 149.99,
        image: 'product2.jpg',
      }, {
        id: 7,
        name: 'Product 2',
        price: 149.99,
        image: 'product2.jpg',
      },
    // Add more products as needed
  ];

function ProductList() {
  const [sortedProducts, setSortedProducts] = useState(products);
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5; // Number of products to display per page

  const handleSortChange = (e) => {
    const newSortOrder = e.target.value;
    setSortOrder(newSortOrder);
    const sorted = [...products].sort((a, b) => {
      if (newSortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setSortedProducts(sorted);
  };

  // Logic to calculate the index of the first and last product on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Logic to change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="ProductList">
      <div>
        <label>
          Sort by price:
          <select value={sortOrder} onChange={handleSortChange}>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </label>
      </div>
      {currentProducts.map((product) => (
        <div key={product.id} className="Product">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>${product.price.toFixed(2)}</p>
          <button>Add to Cart</button>
        </div>
      ))}
      <div>
        {/* Pagination buttons */}
        {Array.from({ length: Math.ceil(sortedProducts.length / productsPerPage) }, (_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>{index + 1}</button>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
