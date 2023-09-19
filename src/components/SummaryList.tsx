import React from "react";
import SummaryItem from "./SummaryItem";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { removeItemFromCart } from "../features/cart/cartProductsSlice";

const SummaryList: React.FC = () => {
  // const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state: RootState) => state.cart);

  return (
    cartItems &&
    cartItems.map((item) => {
      return <SummaryItem key={item.id} item={item} />;
    })
  );
};

export default SummaryList;
