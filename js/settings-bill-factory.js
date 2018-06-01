
  //settings
  function settingUpdates() {
    callCost = parseFloat(callCostElement.value);
    smsCost = parseFloat(smsCostElement.value);
    warningCost = parseFloat(warningCostElement.value);
    criticalCost = parseFloat(criticalCostElement.value);
    console.log(callCost);
    console.log(smsCost);
    console.log(warningCost);
    console.log(criticalCost);
  }


  function addSettingsBill() {

    if (total >= criticalCost) {
      return;
    }

    // get the value entered in the billType textfield
    var settingsBillItem = document.querySelector("input[name='billItemTypeWithSettings']:checked")

    var billTypeEntered = settingsBillItem.value;
    console.log(settingsBillItem.value);
    // update the correct total
    if (billTypeEntered === "call") {
      callsTotal += callCost;
    } else if (billTypeEntered === "sms") {
      smsTotal += smsCost;
    }

    total = callsTotal + smsTotal;
    if (total >= criticalCost) {
      totalBillElem.classList.add('danger')
    }
    if (total < criticalCost) {
      totalBillElem.classList.remove('danger')
    }
    if (total >= warningCost) {
      totalBillElem.classList.add('warning')
    }
    if (total < warningCost) {
      totalBillElem.classList.remove('warning')
    }

    //update the totals that is displayed on the screen.
    callBillElem.innerHTML = callsTotal.toFixed(2);
    smsBillElem.innerHTML = smsTotal.toFixed(2);
    totalBillElem.innerHTML = total.toFixed(2);
  }
