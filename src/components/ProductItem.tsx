import React from "react";
import { Product } from "../features/products/productsSlice";
import { Button } from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addItemToCart } from "../features/cart/cartProductsSlice";
import { RootState } from "../app/store";
import { cartItem } from "../features/cart/cartProductsSlice";

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const dispatch = useAppDispatch();

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
        <p className="text-lg text-blue-500 font-semibold">${product.price}</p>
      </div>

      <p className="text-gray-600 mb-2 ">{product.description}</p>
      <p className="text-gray-500 italic">{product.category}</p>
      <div className="mt-auto">
        <Button
          onClick={() => handleAddToCart(product)}
          className="mt-4 bg-blue-700 rounded-md px-4 py-1 w-full"
        >
          + Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
