let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let USD = 4.03;
let EUR = 4.44;
let CHF = 4.59;


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyElement.value;
    let result = resultElement.value;

    switch (currency) {
        case "USD":
            result = amount / USD;
            break;
        case "EUR":
            result = amount / EUR;
            break;
        case "CHF":
            result = amount / CHF;
            break;
    }
    resultElement.innerText = `${result.toFixed(2)} ${currency}`;
});