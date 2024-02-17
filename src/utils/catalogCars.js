export function splittedAdress(car, index) {
  const logic = car.address.split(",");
  return logic[index];
}

export function shorterFunction(car) {
  return car.map((item) => {
    const words = item.split(" ");
    if (words.length === 1) {
      return item;
    }
    const [firstWord, lastWord] = words.slice(-2);
    return `${firstWord.charAt(0).toUpperCase()}${firstWord.slice(
      1
    )} ${lastWord}`;
  });
}
