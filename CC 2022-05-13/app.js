//write a program that finds the summation of every number 1 to num. The number will always be a positive int greater than 0.

const summation = (n) => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};
