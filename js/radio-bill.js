  var radioBtn = document.querySelector(".billItemTypeRadio");
  var radioAddBtn = document.querySelector(".radioBillAddBtn");
  var radioCallTotal = document.querySelector(".callTotalTwo");
  var radioSmsTotal = document.querySelector(".smsTotalTwo");
  var radioTotal = document.querySelector(".totalTwo");

  var callsTotal = 0;
  var smsTotal = 0;
  var totalCost = 0;

  radioAddBtn.addEventListener('click', function(){
    radioBill();
  });
