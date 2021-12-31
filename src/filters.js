import numeral from "numeral";

const currencyFilter = (value) => {
  if (!value) {
    return "$0.00";
  }

  return numeral(value).format("$0,0.00");
};

export { currencyFilter };
