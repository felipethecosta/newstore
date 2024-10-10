export const isValidCPF = (cpf: string) => {
  const cpfArray = cpf
    .replace(/[^\d]+/g, "")
    .split("")
    .map((digit) => parseInt(digit));

  if (cpfArray.length !== 11) return false;

  const firstDigit = cpfArray[9];
  const secondDigit = cpfArray[10];

  const firstDigitSum = cpfArray
    .slice(0, 9)
    .map((digit, index) => digit * (10 - index))
    .reduce((acc, curr) => acc + curr, 0);

  const firstDigitRemainder = (firstDigitSum * 10) % 11;

  const secondDigitSum = cpfArray
    .slice(0, 10)
    .map((digit, index) => digit * (11 - index))
    .reduce((acc, curr) => acc + curr, 0);

  const secondDigitRemainder = (secondDigitSum * 10) % 11;

  return (
    firstDigit === (firstDigitRemainder === 10 ? 0 : firstDigitRemainder) &&
    secondDigit === (secondDigitRemainder === 10 ? 0 : secondDigitRemainder)
  );
};
