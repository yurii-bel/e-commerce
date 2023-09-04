import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";

import {
  Product,
  useFetchProductsQuery,
} from "../features/products/productsSlice";
import ProductItem from "../components/ProductItem";
import { RootState } from "../app/store";

const Store: React.FC = () => {
  const counter = useAppSelector((state: RootState) => state.counter.value);
  const dispath = useAppDispatch();

  const cartItems = useAppSelector((state: RootState) => state.cart);
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const [products, setProducts] = useState();

  const { data = products, isFetching } = useFetchProductsQuery(products);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4">
      {data?.products.map((product: Product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Store;
