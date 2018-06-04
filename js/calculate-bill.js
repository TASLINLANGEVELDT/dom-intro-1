var calculateBtn = document.querySelector('.calculateBtn');
var billTotal = document.querySelector('.billTotal');
var billString = document.querySelector('.billString');

  function calculateDisplayElement(){


    billTotal.classList.remove('danger');
    billTotal.classList.remove('warning');
    billTotal.innerHTML = totalPhoneBill(billString.value);

    if (totalPhoneBill(billString.value) > 20.00){
      billTotal.classList.add('warning');
    }

    if (totalPhoneBill(billString.value) >= 30.00) {
      billTotal.classList.add('danger');
    }



  }
calculateBtn.addEventListener('click', function() {
  calculateDisplayElement();
});
