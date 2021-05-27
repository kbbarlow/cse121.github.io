const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

const inputKey = document.getElementById('inputKey');
const inputValue = document.getElementById('inputValue');
const buttonInsert = document.getElementById('buttonInsert');
const btnClear = document.getElementById('btnClear');
const output = document.getElementById('output');

buttonInsert.onclick = function () {
  const key = inputKey.value;
  const value = inputValue.value;
  if (key && value){
    localStorage.setItem(key, value);
    location.reload();
  }
};
var sum = 0;
for (let i = 0; i < localStorage.length; i++){
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  var valu = value.split("*");
  sum += parseInt(valu[0]); 
  output.innerHTML +=`"Date" ${key}: ${value} minutes: ${sum} sum <br />`;
}

