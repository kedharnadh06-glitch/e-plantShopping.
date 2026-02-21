import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./redux/CartSlice";

const plantsArray = [
  {
    name: "Tulsi",
    category: "Medicinal",
    img: "/images/tulsi.jpg",
    description: "Sacred medicinal plant",
    cost: 50
  },
  {
    name: "Aloe Vera",
    category: "Medicinal",
    img: "/images/aloe.jpg",
    description: "Healing succulent plant",
    cost: 80
  },
  {
    name: "Lavender",
    category: "Aromatic",
    img: "/images/lavender.jpg",
    description: "Fragrant purple flowers",
    cost: 100
  },
  {
    name: "Mint",
    category: "Aromatic",
    img: "/images/mint.jpg",
    description: "Fresh aromatic herb",
    cost: 40
  },
  {
    name: "Snake Plant",
    category: "Decorative",
    img: "/images/snake.jpg",
    description: "Air-purifying houseplant",
    cost: 120
  },
  {
    name: "Money Plant",
    category: "Decorative",
    img: "/images/money.jpg",
    description: "Popular indoor vine",
    cost: 70
  }
];

export default function ProductList() {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem({ ...plant, quantity: 1 }));
    setAddedToCart({ ...addedToCart, [plant.name]: true });
  };

  return (
    <div>
      <h2>Our Plants</h2>
      <div className="product-grid">
        {plantsArray.map((plant) => (
          <div key={plant.name} className="card">
            <img src={plant.img} alt={plant.name} width="100" />
            <h3>{plant.name}</h3>
            <p>{plant.description}</p>
            <p>₹{plant.cost}</p>
            <button
              disabled={addedToCart[plant.name]}
              onClick={() => handleAddToCart(plant)}
            >
              {addedToCart[plant.name] ? "Added" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
