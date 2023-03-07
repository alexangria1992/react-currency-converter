import { useState } from "react";

export const useCurrency = () => {
  const [amount, setAmount] = useState(25);
  const [currencyOne, setCurrencyOne] = useState("NZD");
  const [currencyTwo, setCurrencyTwo] = useState("EUR");

  return { amount, currencyOne, currencyTwo };
};
