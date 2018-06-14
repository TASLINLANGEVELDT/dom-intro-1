document.addEventListener('DOMContentLoaded', function() {

  var billTypeText = document.querySelector('.billTypeText');
  var callTotalElem = document.querySelector('.callTotalOne');
  var smsTotalElem = document.querySelector('.smsTotalOne');
  var totalElem = document.querySelector('.totalOne');
  var addToBtn = document.querySelector('.addToBillBtn');

  var textBillTotal = TextBillTotalfact();

  function displayTextBillElement() {
    var TextTotal = totalElem.innerHTML

    textBillTotal.assignValue(billTypeText.value);

    callTotalElem.innerHTML = textBillTotal.callerTotal();
    smsTotalElem.innerHTML = textBillTotal.smserTotal();
    totalElem.innerHTML = textBillTotal.total();

    if (textBillTotal.total() >= 50) {
      totalElem.classList.add("danger");
    }
    if (textBillTotal.total() < 50) {
      totalElem.classList.remove('danger');
    }

    if (textBillTotal.total() >= 30) {
      totalElem.classList.add("warning");
    }
    if (textBillTotal.total() < 30) {
      totalElem.classList.remove('warning');
    }

  }
  addToBtn.addEventListener('click', displayTextBillElement);

});
