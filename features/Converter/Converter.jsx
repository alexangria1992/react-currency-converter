import { Spinner, Text } from "@chakra-ui/react";
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

  if (isError)
    return (
      <Text fontWeight="bold" fontSize="3xl" color="white" my="10">
        Something has gone terribly wrong
      </Text>
    );

  if (isLoading)
    return (
      <Spinner
        margin="auto 0"
        size="xl"
        color="puple.500"
        thickness="4px"
        speed="0.65s"
        emptyColor="purple.200"
      />
    );
  return <></>;
};

export default Converter;
