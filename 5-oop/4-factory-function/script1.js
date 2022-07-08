const FactoryFunction = string => {
    const capitalizeString = () => string.toUpperCase();
    const printString = () => console.log(`----${capitalizeString()}----`);
    return { printString, capitalizeString };
  };
  
  const taco = FactoryFunction('taco');
  
//   printString(); // ERROR!!
//   capitalizeString(); // ERROR!!
  let capital = taco.capitalizeString(); // ERROR!!
  console.log(capital)
  taco.printString(); // this prints "----TACO----"