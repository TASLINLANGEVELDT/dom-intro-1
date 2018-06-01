  var radioBtn = document.querySelector(".billItemTypeRadio");
  var radioAddBtn = document.querySelector(".radioBillAddBtn");
  var radioCallTotal = document.querySelector(".callTotalTwo");
  var radioSmsTotal = document.querySelector(".smsTotalTwo");
  var radioTotal = document.querySelector(".totalTwo");

  var callsTotal = 0;
  var smsTotal = 0;
  var totalCost = 0;

  function radioDisplayElement(){
    
    billTotal.innerHTML = radioBill(billString.value);

    if (totalCost >= 50) {
      // adding the danger class will make the text red
      radioTotal.classList.add("danger");
    }

    else if (totalCost >= 30) {
      radioTotal.classList.add("warning");
    }

  }
  radioAddBtn.addEventListener('click', function(){
    radioDisplayElement();
  });
