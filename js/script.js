{
  // variables needed multiple

  const operationFromPLN = document.querySelector(".js-operationFromPLN");
  const operationToPLN = document.querySelector(".js-operationToPLN");
  const amount = document.querySelector(".js-amount");
  const currency = document.querySelector(".js-currency");
  const formElement = document.querySelector(".js-form");

  // calculate functions needed for convert function

  const calculateIntoPLN = (amount, rate) => {
    let result = amount * rate;
    return result;
  };
  const calculateFromPLN = (amount, rate) => {
    let result = amount / rate;
    return result;
  };

  // convert function recognizes what currency we want to convert
  const convert = () => {
    const rateEUR = 4.7;
    const rateGBP = 5.38;
    const rateUSD = 4.82;
    if (operationToPLN.checked) {
      switch (currency.value) {
        case "USD":
          return calculateIntoPLN(amount.value, rateUSD);
        case "EUR":
          return calculateIntoPLN(amount.value, rateEUR);
        case "GBP":
          return calculateIntoPLN(amount.value, rateGBP);
      }
    } else if (operationFromPLN.checked) {
      switch (currency.value) {
        case "USD":
          return calculateFromPLN(amount.value, rateUSD);
        case "EUR":
          return calculateFromPLN(amount.value, rateEUR);
        case "GBP":
          return calculateFromPLN(amount.value, rateGBP);
      }
    }
  }

  // type into field functions

  const typeFormCurrencyField = () => {
    const FormCurrencyField = document.querySelector(".js-FormCurrencyField");
    FormCurrencyField.innerText = currency.value;
  }

  const typeResultField = () => {
    const resultField = document.querySelector(".js-resultField");
    if (operationToPLN.checked) {
      resultField.innerText = `${convert().toFixed(2)} PLN`;
    } else if (operationFromPLN.checked) {
      resultField.innerText = `${convert().toFixed(2)} ${currency.value}`;
    }
  }

  const typeAmountCurrencyField = () => {
    const amountCurrencyField = document.querySelector(".js-amountCurrencyField");
    if (operationToPLN.checked) {
      amount.value == 0
        ? (amountCurrencyField.innerText = `0.00 ${currency.value}`)
        : (amountCurrencyField.innerText = `${amount.value} ${currency.value}`);
    } else if (operationFromPLN.checked) {
      amount.value == 0
        ? (amountCurrencyField.innerText = "0.00 PLN")
        : (amountCurrencyField.innerText = `${amount.value} PLN`);
    }
  }

  //event function

  const formElementInput = () => {
    typeFormCurrencyField();
    convert();
    typeResultField();
    typeAmountCurrencyField();
  }

  //main function
  init = () => {
    formElement.addEventListener("input", formElementInput);
    console.log("Witaj w konsoli, mało kto tu zagląda ;O")
  }

  init();
}