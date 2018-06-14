document.addEventListener('DOMContentLoaded', function() {

  //update cost settings
  var callCostElement = document.querySelector(".callCostSetting");
  var smsCostElement = document.querySelector(".smsCostSetting");

  //update warning levels
  var warningCostElement = document.querySelector(".warningLevelSetting");
  var criticalCostElement = document.querySelector(".criticalLevelSetting");

  //Display total
  var totalBillElem = document.querySelector(".totalSettings");
  var smsBillElem = document.querySelector(".smsTotalSettings");
  var callBillElem = document.querySelector(".callTotalSettings");

  //buttons
  var addBillBtn = document.querySelector(".settinsBillAddBtn");
  var settingsUpdateBtn = document.querySelector(".updateSettings");


  var settingsKey = factoryValues();

  function allIn() {
    var totalBill = settingsKey.getTotal()

    if (totalBill >= settingsKey.getCriticalValue()) {
      totalBillElem.classList.add('danger')
    }
    if (totalBill < settingsKey.getCriticalValue()) {
      totalBillElem.classList.remove('danger')
    }
    if (totalBill >= settingsKey.getWarningValue()) {
      totalBillElem.classList.add('warning')
    }
    if (totalBill <  settingsKey.getWarningValue()) {
      totalBillElem.classList.remove('warning')
    }
  }


  settingsUpdateBtn.addEventListener("click", function() {
    console.log(callCostElement.value)
    settingsKey.updateCall(callCostElement.value);
    settingsKey.updateSms(smsCostElement.value);
    settingsKey.updateWarning(warningCostElement.value);
    settingsKey.updateCritical(criticalCostElement.value);
  });

  //addBillBtn.addEventListener("click", addSettingsBill);

  addBillBtn.addEventListener('click', function() {
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");

    //if (checkedRadioBtn) {

    settingsKey.addSettingsBill(checkedRadioBtn.value)

    callBillElem.innerHTML = settingsKey.getCallTotal().toFixed(2);
    smsBillElem.innerHTML = settingsKey.getSmsTotal().toFixed(2);
    totalBillElem.innerHTML = settingsKey.getTotal().toFixed(2);
    //}
    allIn();
  });
});
