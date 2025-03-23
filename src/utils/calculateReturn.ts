export const calculateReturn = (lastPrice: number, closePrice: number) => {
  return ((lastPrice - closePrice) / closePrice) * 100;
};
