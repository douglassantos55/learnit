export const formatPercentage = (percentage) => {
  const formatter = new Intl.NumberFormat('pt-BR', {style: 'percent'});
  return formatter.format(percentage);
};

export const random = array => {
  return array[Math.floor(Math.random() * array.length)];
};

export const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  let options = {};
  array.forEach(option => options[option] = option);

  return options;
};
