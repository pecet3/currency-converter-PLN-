const formElement = document.querySelector(".js-form");
const resultField = document.querySelector(".js-resultField");

const converterToPLN = (amount, rate) => {
  let result = amount * rate;
  resultField.innerText = `${result.toFixed(2)} PLN`;
};
const converterFromPLN = (amount, rate, currency) => {
  let result = amount / rate;
  resultField.innerText = `${result.toFixed(2)} ${currency}`;
};

formElement.addEventListener("input", (event) => {
  // event.preventDefault(); it is not necessary, when use an input
  const currency = document.querySelector(".js-currency");
  const amount = document.querySelector(".js-amount");
  const amountCurrencyField = document.querySelector(".js-amountCurrencyField");
  const currencyField = document.querySelector(".js-currencyField");
  const operationFromPLN = document.querySelector(".js-operationFromPLN");
  const operationToPLN = document.querySelector(".js-operationToPLN");

  const rateEUR = 4.7;
  const rateGBP = 5.38;
  const rateUSD = 4.82;
  currencyField.innerText = currency.value;

  if (operationToPLN.checked) {
    amount.value == 0
      ? (amountCurrencyField.innerText = `0.00 ${currency.value}`)
      : (amountCurrencyField.innerText = `${amount.value} ${currency.value}`);
    switch (currency.value) {
      case "USD":
        converterToPLN(amount.value, rateUSD);
        break;
      case "EUR":
        converterToPLN(amount.value, rateEUR);
        break;
      case "GBP":
        converterToPLN(amount.value, rateGBP);
        break;
      default:
        alert("wystąpił błąd");
        break;
    }
  } else if (operationFromPLN.checked) {
    amount.value == 0
      ? (amountCurrencyField.innerText = "0.00 PLN")
      : (amountCurrencyField.innerText = `${amount.value} PLN`);
    switch (currency.value) {
      case "USD":
        converterFromPLN(amount.value, rateUSD, currency.value);
        break;
      case "EUR":
        converterFromPLN(amount.value, rateUSD, currency.value);
        break;
      case "GBP":
        converterFromPLN(amount.value, rateUSD, currency.value);
        break;
      default:
        alert("wystąpił błąd");
        break;
    }
  } else {
    alert("wystąpił błąd");
  }
});
