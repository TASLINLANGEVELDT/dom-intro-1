function radioBill() {

  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

  if (checkedRadioBtn) {
    var radioBtn = checkedRadioBtn.value;

    if (radioBtn === "call") {
      callsTotal += 2.75;
    }
     else if (radioBtn === "sms") {
      smsTotal += 0.75;
    }
    if (totalCost >= 50) {

      // adding the danger class will make the text red
      totalCostElem.classList.add("danger");
    }

     else if (totalCost >= 30) {
      totalCostElem.classList.add("warning");
    }
  }


  radioCallTotal.innerHTML = callsTotal.toFixed(2);
  radioSmsTotal.innerHTML = smsTotal.toFixed(2);
  var totalCost = callsTotal + smsTotal;
  radioTotal.innerHTML = totalCost.toFixed(2);
  return radioTotal;
}
