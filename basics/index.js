
startApp();
async function startApp (){
    const apiUrl = "https://api.nbp.pl/api/exchangerates/tables/a?format=json";
    const response = await fetch(apiUrl);
    const data = await response.json();
//console.log(data);
processData(data[0]);
}

function processData(data) {
console.log(data);

const tableNum = data.no;
const ratesArr = data.rates;

const dataTableDiv = document.getElementById("data-table");
document.getElementById("date").innerHTML = tableNum

ratesArr.forEach(function (el) {
    const code = el.code; //usd
    const currency = el.currency; //waluta
    const price = el.mid; //cena
addRateContent(code, currency, price, dataTableDiv)
});
}

function addRateContent(code, currency, price, dataTableDiv) {

const el = document.createElement("div");
el.classList.add("rate");

el.innerHTML = `
<div>${code}</div>
<div>${currency}</div>
<div>${price} zł</div>
`;

dataTableDiv.appendChild(el);
}
