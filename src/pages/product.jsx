import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import { useProducts } from '../api/products';
import backgroundproduct from '../assets/Images/product.jpg';
import searchIcon from '../assets/Icons/search.png';

const categories = [
  {
    value: "3",
    label: "Children",
  },
  {
    value: "1",
    label: "Women",
  },
  {
    value: "2",
    label: "Men",
  },
  {
    value: "4",
    label: "Pregnant Women",
  },
];

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [page, setPage] = useState(1);
  const { data, loading } = useProducts({
    category: selectedCategory,
    page: page
  });

  const handleChange = (e) => {
    if (e.target.value === selectedCategory) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(e.target.value);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrev = () => {
    setPage(page - 1);
  };

  const sectionStyle = {
    backgroundImage: `url(${backgroundproduct})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div>
      <section
        className="h-60 flex flex-col items-center justify-start mb-10 lg:flex-row lg:items-start lg:justify-start"
        style={sectionStyle}
      >
        <div className="lg:px-40 mt-10">
          <p className="text-lg">Home/Shop</p>
          <h2 className="text-2xl font-bold">Shop</h2>
        </div>
      </section>

      {/* Rest of the code... */}

      <div className="flex gap-4 py-4">
        <button onClick={handlePrev}>Prev</button>
        <span
          className={'bg-blue-400 p-1 text-sm rounded-full h-8 w-8' +
            ' text-white flex items-center justify-center'}
        >
          {page}
        </span>
        <button onClick={handleNext}>Next</button>
      </div>

      {/* Rest of the code... */}
    </div>
  );
};

export default Product;
