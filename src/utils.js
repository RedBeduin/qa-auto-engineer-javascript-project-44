const randomInt = (start, end) => {
  const min = Math.ceil(start);
  const max = Math.ceil(end);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default randomInt;
