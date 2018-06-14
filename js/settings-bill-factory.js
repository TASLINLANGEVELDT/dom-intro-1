function factoryValues() {


  function settingUpdates() {

    var callCost = 0.00;
    var smsCost = 0.00;
    var warningCost = 0.00;
    var criticalCost = 0.00;
    var callsTotal = 0.00;
    var smsTotal = 0.00;
    var total = 0.00;

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
  }

}
