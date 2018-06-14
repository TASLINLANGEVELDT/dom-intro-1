document.addEventListener('DOMContentLoaded', function() {


  var calculateBtn = document.querySelector('.calculateBtn');
  var billTotal = document.querySelector('.billTotal');
  var billString = document.querySelector('.billString');

  var calculateDisplayElement = function() {


    billTotal.classList.remove('danger');
    billTotal.classList.remove('warning');
    billTotal.innerHTML = totalPhoneBill(billString.value);

    if (totalPhoneBill(billString.value) > 20.00) {
      billTotal.classList.add('warning');
    }

    if (totalPhoneBill(billString.value) >= 30.00) {
      billTotal.classList.add('danger');
    }



  }
  calculateBtn.addEventListener('click', calculateDisplayElement);

});
