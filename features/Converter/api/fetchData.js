export const fetchRates = async (currencyOne) => {
  const { data } = await axios.get(
    `/latest?base=${currencyOne}&apiKey${import.meta.env.VITE_API_KEY}`
  );

  return data;
};

export const fetchSymbols = async () => {
  const { data } = await axios.get(
    `/symbols?apiKey${import.meta.env.VITE_API_KEY}`
  );

  return data;
};
