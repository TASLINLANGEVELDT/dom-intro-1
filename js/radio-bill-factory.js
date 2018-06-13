function radioBill() {

  var callsTotalR = 0;
  var smsTotalR = 0;
  var totalCostR = 0;

  function billCalculate(string) {

    if (string === "call") {
      callsTotalR += 2.75;
      totalCostR += 2.75;
    } else if (string === "sms") {
      smsTotalR += 0.75;
      totalCostR += 0.75;
    }
  }


  function getCallTotal() {
    return callsTotalR;
  }

  function getSmsTotal() {
    return smsTotalR;
  }

  function getTotal() {
    return totalCostR;
  }

  return {
    billCalculate,
    getCallTotal,
    getSmsTotal,
    getTotal
  }
}
