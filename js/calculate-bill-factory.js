function totalPhoneBill(callsAndSmses) {

  var allData = callsAndSmses.split(',');
  var totalBill = 0;

  for (var i = 0; i < allData.length; i++) {
    if (allData[i].trim() == "sms") {
      totalBill += 0.75;

    } else if (allData[i].trim() == "call") {
      totalBill += 2.75;
    }
  }
  var findingTotal = totalBill.toFixed(2);
  return findingTotal;
}
