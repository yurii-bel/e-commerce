import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";

import ProductItem from "../components/ProductItem";
import { RootState } from "../app/store";
import { cartItem } from "../features/cart/cartProductsSlice";
import {
  Product,
  useFetchProductsQuery,
} from "../features/products/productsSlice";

const Store: React.FC = () => {
  // const dispatch = useAppDispatch();
  // const cartItems = useAppSelector((state: RootState) => state.cart);

  // Initialize products state with an empty array
  const [products, setProducts] = useState<Product[]>([]);
  // localStorage.removeItem("store-products");
  // Fetch products using Redux Toolkit Query
  const { data, isFetching } = useFetchProductsQuery([]);

  useEffect(() => {
    // Update the products state with data.products when it's available
    if (data?.products) setProducts(data.products);
  }, [data]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4">
      {data?.products ? (
        products.map((product: Product) => (
          <ProductItem key={product.id} product={product} />
        ))
      ) : (
        <p className="text-center text-xl text-white">Loading...</p>
      )}
    </div>
  );
};

export default Store;
