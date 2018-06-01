  // get a reference to the sms or call bills
  var callBillElem = document.querySelector(".callTotalSettings");
  var smsBillElem = document.querySelector(".smsTotalSettings");
  var totalBillElem = document.querySelector(".totalSettings");
  //ref to bill total addToBtn
  //var settingsBillItem = document.querySelector("input[name='billItemTypeWithSettings']:checked"//);
  // get refences to all the settings fields
  var callCostElement = document.querySelector(".callCostSetting");
  var callTotalDisplay = document.querySelector('.callCostSetting');
  var smsCostElement = document.querySelector(".smsCostSetting");
  var smsTotalDisplay = document.querySelector(".smsTotalSettings");
  var warningCostElement = document.querySelector(".warningLevelSetting");
  var criticalCostElement = document.querySelector(".criticalLevelSetting");
  //get a reference to the add button
  var addBillBtn = document.querySelector(".settinsBillAddBtn");
  //get a reference to the 'Update settings' button
  var settingsUpdateBtn = document.querySelector(".updateSettings");

  var callCost = 0.00;
  var smsCost = 0.00;
  var warningCost = 0.00;
  var criticalCost = 0.00;
  var callsTotal = 0.00;
  var smsTotal = 0.00;
  var total = 0.00;

  // eventListeners for Settings click
  settingsUpdateBtn.addEventListener("click", settingUpdates);

  //eventListeners for Bill click
  addBillBtn.addEventListener("click", addSettingsBill);
