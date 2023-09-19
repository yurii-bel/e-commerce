import React, { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import {
  Product,
  useFetchProductsQuery,
} from "../features/products/productsSlice";
import StoreFilter from "../components/StoreFilter";

const Store: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { data, isFetching } = useFetchProductsQuery([]);

  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (data?.products) setProducts(data.products);
  }, [data]);

  const handleFilterChange = (value: string) => {
    setFilter(value);
  };

  return (
    <div className="px-4">
      <StoreFilter onFilterChange={handleFilterChange} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
        {isFetching ? (
          <p className="text-center text-xl text-white">Loading...</p>
        ) : (
          products
            .filter((product: Product) =>
              product.title.toLowerCase().includes(filter.toLowerCase())
            )
            .map((product: Product) => (
              <ProductItem key={product.id} product={product} />
            ))
        )}
      </div>
    </div>
  );
};

export default Store;
