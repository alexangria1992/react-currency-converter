import { Flex, Select } from "@chakra-ui/react";
import React from "react";

const ConverterOption = ({
  symbol,
  currencyList,
  onCurrencyChange,
  currency,
}) => {
  return (
    <Flex gap="1rem" shadow="md" padding="1rem" borderRadius="lg">
      <Select
        variant="unstyled"
        size="md"
        defaultValue={currency}
        onChange={() => onCurrencyChange(e.target.value)}
      >
        {currencyList.map((currency) => (
          <option></option>
        ))}
        {/* {currencyList.map((currency) => (
          <option key={currency} value={currency}>
            {currency} - {symbol[currency]}
          </option>
        ))} */}
      </Select>
    </Flex>
  );
};

export default ConverterOption;
