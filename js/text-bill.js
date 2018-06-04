  var billTypeText = document.querySelector('.billTypeText');
  var callTotalElem = document.querySelector('.callTotalOne');
  var smsTotalElem = document.querySelector('.smsTotalOne');
  var totalElem = document.querySelector('.totalOne');
  var addToBtn = document.querySelector('.addToBillBtn');

  // these variables are global and defined outside of the Add button event listener.


  function displayTextBillElement(){

    var billTypeEntered = billTypeText.value.trim();

    billTotal.classList.remove('danger');
    billTotal.classList.remove('warning');
    billTotal.innerHTML = textBillTotal(billString.value);

    callTotalElem.innerHTML = callerTotal();
    smsTotalElem.innerHTML = smserTotal();

    totalElem.innerHTML = Total();
    //color the total based on the criteria
    if (Total() >= 50) {
      totalElem.classList.add("danger");
    }

     else if (Total() >= 30) {
      totalElem.classList.add("warning");
    }

  }
  addToBtn.addEventListener('click', function() {
   displayTextBillElement();
  });
