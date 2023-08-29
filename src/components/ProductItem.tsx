import React, { useEffect, useState } from "react";
import { Product } from "../features/products/productsSlice";
import { Button } from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  reduceItemQuantityFromCart,
} from "../features/cart/cartProductsSlice";
import { RootState } from "../app/store";
import { cartItem } from "../features/cart/cartProductsSlice";
import { formatCurrency } from "../utils/formatCurrency";

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state: RootState) => state.cart);

  // Find the corresponding cart item based on product id
  const curItem = cartItems.find((item) => item.id === product.id);

  const handleAddToCart = (product: Product) => {
    const cartItemToAdd: cartItem = {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      category: product.category,
      thumbnail: product.thumbnail,
      quantity: 0, // Set initial quantity to 1 when adding to cart
    };

    dispatch(addItemToCart(cartItemToAdd));
  };

  const handleReduceQuantity = (product: Product) => {
    const cartItemQuantityToReduce: cartItem = {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      category: product.category,
      thumbnail: product.thumbnail,
      quantity: 0, // Set initial quantity to 1 when adding to cart
    };
    dispatch(reduceItemQuantityFromCart(cartItemQuantityToReduce));
  };

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <div className="flex flex-col border rounded-lg p-4 max-h-min shadow-md ">
      <img
        src={product.thumbnail}
        alt={product.title}
        className=" mb-4 max-w-[200px] object-contain aspect-square"
      />
      <div className="flex justify-between items-center bg-slate-50 p-1 rounded-md">
        <h2 className="text-lg font-semibold mb-2 text-slate-900">
          {product.title}
        </h2>
        <p className="text-lg text-blue-500 font-semibold">
          {formatCurrency(product.price)}
        </p>
      </div>

      <p className="text-gray-600 mb-2 ">{product.description}</p>
      <p className="text-gray-500 italic">{product.category}</p>
      <div className="mt-auto pt-4">
        {curItem && curItem.quantity > 0 ? (
          <div className="flex justify-between items-center">
            <div className="flex justify-evenly items-center w-[80%]">
              <button
                onClick={() => handleReduceQuantity(product)}
                className="w-1/4 bg-blue-700  rounded-md text-white"
              >
                -
              </button>
              <div className="font-semibold text-slate-700">
                {curItem.quantity} in cart
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="w-1/4 bg-blue-700 rounded-md text-white"
              >
                +
              </button>
            </div>
            <button
              onClick={() => handleRemoveFromCart(product.id)}
              className="self-center bg-red-700 px-1 rounded-md text-white"
            >
              Remove
            </button>
          </div>
        ) : (
          <Button
            onClick={() => {
              handleAddToCart(product);
            }}
            className="mt-4 bg-blue-700 rounded-md px-4 py-1 w-full"
          >
            + Add to Cart
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
