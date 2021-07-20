export const formatCurrency = (value: any) => {
  return `R$ ${parseFloat(value)
    .toFixed(2)
    .replace('.', ',') || value}`;
};
