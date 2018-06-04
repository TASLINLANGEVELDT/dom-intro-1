  var radioBtn = document.querySelector(".billItemTypeRadio");
  var radioAddBtn = document.querySelector(".radioBillAddBtn");
  var radioCallTotal = document.querySelector(".callTotalTwo");
  var radioSmsTotal = document.querySelector(".smsTotalTwo");
  var radioTotal = document.querySelector(".totalTwo");

  var callsTotalR = 0;
  var smsTotalR = 0;
  var totalCostR = 0;

  radioAddBtn.addEventListener('click', function(){
    radioBill();
  });
