function textBillTotal(callsOrSmses) {

  var billTypeEntered = billTypeText.value.trim();

  if (billTypeEntered === "call") {
    callsTotal += 2.75;
  }
  else if (billTypeEntered === "sms") {
    smsTotal += 0.75;
  }

  callTotalElem.innerHTML = callsTotal.toFixed(2);
  smsTotalElem.innerHTML = smsTotal.toFixed(2);
  var totalCostElem = callsTotal + smsTotal;
  totalCostElem.innerHTML = totalCostElem.toFixed(2);
}
