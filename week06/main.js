const inputKey = document.getElementById('inputKey');
const inputValue = document.getElementById('inputValueinputKey');
const buttonInsert = document.getElementById('buttonInsert');
const btnClear = document.getElementById('btnClear');
const output = document.getElementById('output');

buttonInsert.onclick = function () {
  const key = inputKey.value;
  const value = inputValue.value;
  console.log(key, value);
  if (key && value){
    localStorage.setItem(key, value);
    location.reload();
  }
};

