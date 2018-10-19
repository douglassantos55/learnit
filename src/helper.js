export const formatPercentage = (percentage) => {
  const formatter = new Intl.NumberFormat('pt-BR', {style: 'percent'});
  return formatter.format(percentage);
};
