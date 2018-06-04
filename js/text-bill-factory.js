  function TextBillTotal() {
    var callsTotal = 0;
    var smsTotal = 0;
    var totalCost = 0;

    function assignValue(callsOrSmses) {
      if (callsOrSmses === "call") {
        callsTotal += 2.75;
      } else if (callsOrSmses === "sms") {
        smsTotal += 0.75;
      }
    }

    function callerTotal() {
      return callsTotal.toFixed(2);
    }


    function smserTotal() {
      return smsTotal.toFixed(2);
    }

    function total() {
      totalCost = callsTotal + smsTotal;
      return totalCost.toFixed(2);
    }


    return {
      assignValue,
      callerTotal,
      smserTotal,
      total
    }
  }
