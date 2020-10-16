// Minha primeira solução para números aleatórios

/* const randomNumberGeneratorForArray = (amount, rangerNumber) => {
  const outputArray = [];
  for (let index = 1; index <= amount; index++) {
    let randomNumber = Math.pow(
      Math.floor(Math.random() * rangerNumber + 1),
      2
    );
    outputArray.push(randomNumber);
  }
  return outputArray;
}; */
// const numbersRandom = randomNumberGeneratorForArray(10, 50);
// const sumTotalNumbers = numbersRandom.reduce((acc, number) => acc + number, 0);

const numbersRandomArray = Array.from({ length: 10 }, () =>
  Math.pow(Math.floor(Math.random() * 50 + 1), 2)
);
const sumTotalNumbers = numbersRandomArray.reduce(
  (acc, number) => acc + number,
  0
);

const promiseTest = (number) => {
  return new Promise((res, error) => (number < 8000 ? res() : error()))
    .then(() => console.log('O numero foi MENOR que 8000-->RESOLVIDA'))
    .catch(() => console.log('O numero foi MAIOR que 8000-->REJEITADA'));
};
promiseTest(sumTotalNumbers);
console.log(sumTotalNumbers);
