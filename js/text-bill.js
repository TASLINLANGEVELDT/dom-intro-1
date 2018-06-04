  var billTypeText = document.querySelector('.billTypeText');
  var callTotalElem = document.querySelector('.callTotalOne');
  var smsTotalElem = document.querySelector('.smsTotalOne');
  var totalElem = document.querySelector('.totalOne');
  var addToBtn = document.querySelector('.addToBillBtn');

  // these variables are global and defined outside of the Add button event listener.

  var textBillTotal = TextBillTotal();

  function displayTextBillElement(){

    textBillTotal.assignValue(billTypeText.value);

    //var billTypeEntered = billTypeText.value.trim();

    //billTotal.innerHTML = textBillTotal(billString.value);

    callTotalElem.innerHTML = textBillTotal.callerTotal();
    smsTotalElem.innerHTML = textBillTotal.smserTotal();
    totalElem.innerHTML = textBillTotal.total();

    //color the total based on the criteria
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
