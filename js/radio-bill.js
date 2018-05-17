var radioBtn = document.querySelector(".billItemTypeRadio");
var radioAddBtn = document.querySelector(".radioBillAddBtn");
var radioCallTotal = document.querySelector(".callTotalTwo");
var radioSmsTotal = document.querySelector(".smsTotalTwo");
var radioTotal = document.querySelector(".totalTwo");

var callsTotal = 0;
var smsTotal = 0;
var totalCost = 0;

// the event listener is declared below here
function radioBill() {
  //get  the value entered in the billType textfield
  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if (checkedRadioBtn) {
    var radioBtn = checkedRadioBtn.value;
    // billItemType will be 'call' or 'sms'
    if (radioBtn === "call") {
      callsTotal += 2.75;
    } else if (radioBtn === "sms") {
      smsTotal += 0.75;
    }
  }

  //update the total that is is displayed on screen
  radioCallTotal.innerHTML = callsTotal.toFixed(2);
  radioSmsTotal.innerHTML = smsTotal.toFixed(2);
  var totalCost = callsTotal + smsTotal;
  radioTotal.innerHTML = totalCost.toFixed(2);
  if (totalCost >= 50) {
    // adding the danger class will make the text red
    radioTotal.classList.add("danger");
  } else if (totalCost >= 30) {
    radioTotal.classList.add("warning");
  }
}

radioAddBtn.addEventListener('click', radioBill);
