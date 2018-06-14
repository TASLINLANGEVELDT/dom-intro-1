document.addEventListener('DOMContentLoaded', function() {

  var callBillElem = document.querySelector(".callTotalSettings");
  var smsBillElem = document.querySelector(".smsTotalSettings");
  var totalBillElem = document.querySelector(".totalSettings");
  var callCostElement = document.querySelector(".callCostSetting");
  var callTotalDisplay = document.querySelector('.callCostSetting');
  var smsCostElement = document.querySelector(".smsCostSetting");
  var smsTotalDisplay = document.querySelector(".smsTotalSettings");
  var warningCostElement = document.querySelector(".warningLevelSetting");
  var criticalCostElement = document.querySelector(".criticalLevelSetting");
  var addBillBtn = document.querySelector(".settinsBillAddBtn");
  var settingsUpdateBtn = document.querySelector(".updateSettings");

  var callCost = 0.00;
  var smsCost = 0.00;
  var warningCost = 0.00;
  var criticalCost = 0.00;
  var callsTotal = 0.00;
  var smsTotal = 0.00;
  var total = 0.00;

  function allIn(){
    var lastOutCome = totalBillElem.innerHTML

    if (lastOutCome >= criticalCost) {
      totalBillElem.classList.add('danger')
    }
    if (lastOutCome < criticalCost) {
      totalBillElem.classList.remove('danger')
    }
    if (lastOutCome >= warningCost) {
      totalBillElem.classList.add('warning')
    }
    if (lastOutCome < warningCost) {
      totalBillElem.classList.remove('warning')
    }
  }

  settingsUpdateBtn.addEventListener("click", settingUpdates);

  addBillBtn.addEventListener("click", addSettingsBill);

  radioAddBtn.addEventListener('click', function() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

    if (checkedRadioBtn) {
      callBillElem.innerHTML = callsTotal.toFixed(2);
      smsBillElem.innerHTML = smsTotal.toFixed(2);
      totalBillElem.innerHTML = total.toFixed(2);
    }
    allIn();
  });
});
