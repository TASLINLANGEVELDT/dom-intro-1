var calculateBtn = document.querySelector('.calculateBtn');
var billTotal = document.querySelector('.billTotal');
var billString = document.querySelector('.billString');

  function calculateDisplayElement(){


    billTotal.classList.remove('danger');
    billTotal.classList.remove('warning');
    billTotal.innerHTML = totalPhoneBill(billString.value);


    if (totalPhoneBill() > 30.00) {
      billTotal.classList.add('danger');
    }

    else if (totalPhoneBill(billString.value) > 20.00){ //&& totalPhoneBill(billString.value) < 30.00) {
      billTotal.classList.add('warning');
    }

  }
//link the function to a click event on the calculate button
calculateBtn.addEventListener('click', function() {
  calculateDisplayElement();
});
