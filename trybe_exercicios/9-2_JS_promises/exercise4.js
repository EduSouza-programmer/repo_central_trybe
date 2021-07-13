const numbersRandomArray = Array.from({ length: 10 }, () =>
  Math.pow(Math.floor(Math.random() * 50 + 1), 2)
);
const sumTotalNumbers = numbersRandomArray.reduce(
  (acc, number) => acc + number,
  0
);

const numberDividedBy = (arrNumbersDividers, number) => {
  return arrNumbersDividers.map((num) => Math.round(number / num));
};

const promiseTest = (number) => {
  return new Promise((res, error) => (number < 8000 ? res(number) : error()))
    .then((number) => console.log(numberDividedBy([2, 3, 5, 10], number)))
    .catch(() =>
      console.log('É mais de oito mil! Essa promise deve estar quebrada!')
    );
};
promiseTest(sumTotalNumbers);
console.log(sumTotalNumbers);
