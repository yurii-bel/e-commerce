import React from "react";
import { Product } from "../features/products/productsSlice";
import { Button } from "@material-tailwind/react";
import { useAppDispatch } from "../app/hooks";
import {
  addItemToCart,
  removeItemFromCart,
  reduceItemQuantityFromCart,
} from "../features/cart/cartProductsSlice";
import { cartItem } from "../features/cart/cartProductsSlice";
import { formatCurrency } from "../utils/formatCurrency";

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const dispatch = useAppDispatch();

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
      brand: product.brand,
      rating: product.rating,
      quantity: 0,
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
      brand: product.brand,
      rating: product.rating,
      quantity: 0,
    };
    dispatch(reduceItemQuantityFromCart(cartItemQuantityToReduce));
  };

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <div className="bg-white flex flex-col border rounded-sm p-4 max-h-min shadow-md">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="mb-4 max-w-[200px] object-contain aspect-square"
      />
      <div className="flex justify-between items-center bg-slate-50 p-1 rounded-md">
        <h2 className="text-lg font-semibold mb-2 text-slate-900">
          {product.title}
        </h2>
        <p className="text-lg text-slate-900 font-semibold">
          {formatCurrency(product.price)}
        </p>
      </div>

      <p className="text-gray-600 mb-2 ">{product.description}</p>
      <p className="text-gray-500 italic">{product.category}</p>
      <div className="mt-auto pt-4">
        {curItem && curItem.quantity > 0 ? (
          <div className="text-sm flex justify-between items-center">
            <div className="flex justify-evenly items-center w-[80%]">
              <button
                onClick={() => handleReduceQuantity(product)}
                className="w-1/4 bg-slate-700  rounded-md text-white hover:bg-slate-800 hover:text-slate-200"
              >
                -
              </button>
              <div className="font-semibold text-slate-700">
                {curItem.quantity} in cart
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="w-1/4 bg-slate-700 rounded-md text-white hover:bg-slate-800 hover:text-slate-200"
              >
                +
              </button>
            </div>
            <button
              onClick={() => handleRemoveFromCart(product.id)}
              className="self-center bg-red-800 px-2 rounded-md text-white hover:bg-red-900 hover:text-slate-100"
            >
              Remove
            </button>
          </div>
        ) : (
          <Button
            onClick={() => {
              handleAddToCart(product);
            }}
            className="mt-4 bg-slate-700 rounded-md px-4 py-1 w-full hover:bg-slate-800 hover:text-slate-200"
          >
            + Add to Cart
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
