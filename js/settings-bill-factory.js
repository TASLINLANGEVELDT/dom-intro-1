function factoryValues() {

  var callCost = 0.00;
  var smsCost = 0.00;
  var warningCost = 0.00;
  var criticalCost = 0.00;
  var callsTotal = 0.00;
  var smsTotal = 0.00;
  var total = 0.00;

function updateCall(value){
  callCost = parseFloat(value);
  return callCost
}

function updateSms(value){
  smsCost = parseFloat(value);
  return smsCost
}

function updateWarning(value){
warningCost = parseFloat(value);
return warningCost
}

function updateCritical(value){
criticalCost = parseFloat(value);
return criticalCost
}

function getCriticalValue(){
return criticalCost
}

function getWarningValue(){
return warningCost
}



  function addSettingsBill(value) {

    if (value === "call") {
      callsTotal += callCost;
    } else if (value === "sms") {
      smsTotal += smsCost;
    }

    // if (total >= criticalCost) {
    //   return;
    // }

    // get the value entered in the billType textfield
    // var settingsBillItem = document.querySelector("input[name='billItemTypeWithSettings']:checked")

    // var billTypeEntered = settingsBillItem.value;
    // console.log(settingsBillItem.value);
    // update the correct total
  }

  function getCallTotal(){
    return callsTotal;
  }

  function getSmsTotal(){
    return smsTotal;
  }

  function getTotal(){
    total = callsTotal + smsTotal
    return total;
  }


  return {
  //settingUpdates,
    addSettingsBill,
    updateCall,
    updateSms,

    updateWarning,
    updateCritical,
    getCriticalValue,
    getWarningValue,

    getCallTotal,
    getSmsTotal,
    getTotal
  }

}
