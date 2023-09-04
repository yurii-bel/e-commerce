import React from "react";

import {
  addItemToCart,
  cartItem,
  reduceItemQuantityFromCart,
  removeItemFromCart,
} from "../features/cart/cartProductsSlice";
import { formatCurrency } from "../utils/formatCurrency";
import RatingStars from "./RatingStars";
import { useAppDispatch } from "../app/hooks";

interface ItemProps {
  item: cartItem;
}

const SummaryItem: React.FC<ItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const handleRemoveFromCart = (id: number) => {
    dispatch(removeItemFromCart(id));
  };

  const handleAddToCart = (product: cartItem) => {
    const cartItemToAdd: cartItem = {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      category: product.category,
      thumbnail: product.thumbnail,
      brand: product.brand,
      rating: product.rating,
      quantity: 0,
    };

    dispatch(addItemToCart(cartItemToAdd));
  };

  const handleReduceQuantity = (product: cartItem) => {
    const cartItemQuantityToReduce: cartItem = {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      category: product.category,
      thumbnail: product.thumbnail,
      brand: product.brand,
      rating: product.rating,
      quantity: 0,
    };
    dispatch(reduceItemQuantityFromCart(cartItemQuantityToReduce));
  };

  return (
    <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
      {/* Item */}
      <div className="w-1/2">
        <img
          src={item.thumbnail}
          alt="img"
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="md:pl-3 md:w-3/4">
        <div className="flex items-center justify-between w-full pt-1">
          <p className="text-base font-black leading-none text-gray-800">
            {item.title}
          </p>
          <RatingStars activeStars={item.rating} />
        </div>
        <p className="text-xs leading-3 text-gray-600 pt-2 max-w-sm">
          <span className="font-bold">Description: </span> {item.description}
        </p>
        <p className="w-96 text-xs leading-3 text-gray-600 py-4">
          <span className="font-bold">Category: </span> {item.category}
        </p>
        <p className="flex items-center gap-1 w-96 text-xs leading-3 text-gray-600">
          <span className="font-bold">Quantity: </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => handleReduceQuantity(item)}
              className="w-[16px] bg-slate-700 text-white hover:bg-slate-800 hover:text-slate-200 py-0.5 rounded-sm"
            >
              -
            </button>
            <div className="font-bold">{item.quantity}</div>
            <button
              onClick={() => handleAddToCart(item)}
              className="w-[16px] bg-slate-700 text-white hover:bg-slate-800 hover:text-slate-200 py-0.5 rounded-sm"
            >
              +
            </button>
          </div>
        </p>
        <div className="flex items-center justify-between pt-5 pr-6">
          <div className="flex itemms-center">
            <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
              Add to favorites
            </p>
            <button
              onClick={() => handleRemoveFromCart(item.id)}
              className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
            >
              Remove
            </button>
          </div>
          <p className="text-base font-black leading-none text-gray-800">
            {formatCurrency(item.price)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SummaryItem;
