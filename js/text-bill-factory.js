function textBillTotal(callsOrSmses) {

  var billTypeEntered = billTypeText.value.trim();

  if (billTypeEntered === "call") {
    callsTotal += 2.75;
  }
  else if (billTypeEntered === "sms") {
    smsTotal += 0.75;
  }

  var totalCostElem = callsTotal + smsTotal;
  callTotalElem.innerHTML = callsTotal.toFixed(2);
  smsTotalElem.innerHTML = smsTotal.toFixed(2);
  totalCostElem.innerHTML = totalCostElem.toFixed(2);
  return completeTotal;
}
