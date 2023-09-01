function formatNumbers(entry) {
  const [integer, decimal] = entry.toString().split(".");
  const formatInteger = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  });

  //   guard clause
  if (entry == "") return;

  //   logic
  if (decimal == null) return formatInteger.format(integer);
  return `${formatInteger.format(integer)}.${decimal}`;
}

export default formatNumbers;
