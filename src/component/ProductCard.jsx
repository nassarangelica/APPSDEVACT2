import React from "react";

function ProductCard({ image, name, price, description, onBuy }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden w-full h-[450px]">
      {/* Album Image */}
      <div className="h-48 w-full flex items-center justify-center bg-gray-100">
        <img src={image} alt={name} className="h-full object-contain" />
      </div>

      {/* Card Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-bold mb-2 text-center">{name}</h2>
        <p className="text-green-700 font-semibold text-center mb-2">{price}</p>
        <p className="text-gray-600 text-sm flex-grow line-clamp-4">{description}</p>
        <button 
          onClick={onBuy} 
          className="mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >BUY NOW
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
