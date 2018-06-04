function radioBill() {

  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

  if (checkedRadioBtn) {
    var radioBtn = checkedRadioBtn.value;

    if (radioBtn === "call") {
      callsTotalR += 2.75;
    }
     else if (radioBtn === "sms") {
      smsTotalR += 0.75;
    }
    if (totalCostR >= 50) {
      radioTotal.classList.add("danger");
    }

     else if (totalCostR >= 30) {
      radioTotal.classList.add("warning");
    }
  }


  radioCallTotal.innerHTML = callsTotalR.toFixed(2);
  radioSmsTotal.innerHTML = smsTotalR.toFixed(2);
  totalCostR = callsTotalR + smsTotalR;
  radioTotal.innerHTML = totalCostR.toFixed(2);
  return radioTotal;
}
