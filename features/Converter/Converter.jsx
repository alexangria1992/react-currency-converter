import React from "react";
import { useCurrency } from "../common/hooks/useCurrency";

const Converter = () => {
  const {
    isLoading,
    isError,
    amount,
    setAmount,
    currencyOne,
    setCurrencyOne,
    currencyTwo,
    setCurrencyTwo,
    currencyList,
    convertedAmount,
    ratesData,
    symbolsData,
    date,
    time,
  } = useCurrency();
  return (
    <>
      <>{amount}</>
      <>{currencyOne}</>

      <>{currencyTwo}</>
    </>
  );
};

export default Converter;
