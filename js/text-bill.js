  var billTypeText = document.querySelector('.billTypeText');
  var callTotalElem = document.querySelector('.callTotalOne');
  var smsTotalElem = document.querySelector('.smsTotalOne');
  var totalCostElem = document.querySelector('.totalOne');
  var addToBtn = document.querySelector('.addToBillBtn');

  // these variables are global and defined outside of the Add button event listener.
  var callsTotal = 0;
  var smsTotal = 0;
  var totalCost = 0;

  function displayTextBillElement(){

    billTotal.classList.remove('danger');
    billTotal.classList.remove('warning');
    billTotal.innerHTML = textBillTotal(billString.value);

    //color the total based on the criteria
    if (totalCost >= 50) {

      // adding the danger class will make the text red
      totalCostElem.classList.add("danger");
    }

     else if (totalCost >= 30) {
      totalCostElem.classList.add("warning");
    }

  }
  addToBtn.addEventListener('click', function() {
   displayTextBillElement();
  });
