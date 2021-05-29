const currencyEleOne = document.getElementById('currency1');
const currencyEleTwo = document.getElementById('currency2');
const amountEleOne = document.getElementById('amount1');
const amountEleTwo = document.getElementById('amount2');

const swapBtn = document.getElementById('swap');
const rate_detail = document.getElementById('rate_detail');
const time_update = document.getElementById("timeUpdate");

// Event Listeners

currencyEleOne.addEventListener('change', calculate);
currencyEleTwo.addEventListener('change', calculate);
amountEleOne.addEventListener('input', calculate);




swapBtn.addEventListener('click', () => {

    if (currencyEleOne.value == "") {
        currencyEleOne.style.border = " 2px solid red";
    } else {
        currencyEleOne.style.border = " 2px solid  rgb(95, 186, 167)";
        let temp = currencyEleTwo.value;
        currencyEleTwo.value = currencyEleOne.value;
        currencyEleOne.value = temp;
        calculate();
    }

});

// Functions

function calculate() {

    let currency_one = currencyEleOne.value;
    let currency_Two = currencyEleTwo.value;

    if (currency_one == "") {
        currencyEleOne.style.border = " 2px solid red";
    } else if (currency_Two == "") {
        currencyEleTwo.style.border = " 2px solid red";
    } else {
        currencyEleOne.style.border = " 2px solid  rgb(95, 186, 167)";
        currencyEleTwo.style.border = " 2px solid  rgb(95, 186, 167)";
        fetch(` https://v6.exchangerate-api.com/v6/b2137b41db1b05d3f625553d/latest/${currency_one}`)
            .then(res => res.json())
            .then(data => {
                let rates = data.conversion_rates;
                rate_detail.innerText = `1 ${currency_one} = ${rates[currency_Two]} ${currency_Two}`;
                time_update.innerText = `(Last Update: ${data.time_last_update_utc})`;
                amountEleTwo.value = (amountEleOne.value * rates[currency_Two]).toFixed(2);

            });
    }

}