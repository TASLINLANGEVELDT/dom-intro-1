var billTypeText = document.querySelector('.billTypeText');
var callsTotalElem = document.querySelector('.callTotalOne');
var smsTotalElem = document.querySelector('.smsTotalOne');
var totalCostElem = document.querySelector('.totalOne');
var addToBillBtn = document.querySelector('.addToBillBtn');

function TextBillTotal() {
  var billtext = {
    sms: 0,
    call: 0
  };

  function calcBill(typeofBill) {
    if (typeofBill === 'sms') {
      billtext['sms'] += 0.75;
    } else if (typeofBill === 'call') {
      billtext['call'] += 2.75;
    }
  }
  var CallTotal = function() {

    return billtext['call'].toFixed(1);
  }

  var smsTotal = function() {

    return billtext['sms'].toFixed(1);
  }

  var billTotal = function() {

    return (billtext['sms'] + billtext['call']).toFixed(1);
  }

  var checkBill = function(typeofBill) {
    return {
      sms: billtext['sms'],
      call: billtext['call']
    }
  }

  return {
    calc: calcBill,
    check: checkBill,
    total: billTotal,
    smsTotal: smsTotal,
    callTotal: CallTotal

  }
}
var textbill = TextBillTotal();
var textbillClicked = function() {

  var billTypeEntered = billTypeText.value.trim();
  textbill.calc(billTypeEntered);
  var totalbill = textbill.check(billTypeEntered);
  callsTotalElem.innerHTML = (totalbill['call']).toFixed(1);
  smsTotalElem.innerHTML = (totalbill['sms']).toFixed(1);
  var checkTotal = (totalbill['call'] + totalbill['sms']);
  totalCostElem.innerHTML = checkTotal.toFixed(1);
  if (checkTotal >= 30 && checkTotal < 50) {
    totalCostElem.classList.add("warning");
  } else if (checkTotal >= 50) {
    totalCostElem.classList.add("danger");
  }
}


addToBillBtn.addEventListener('click', textbillClicked);
