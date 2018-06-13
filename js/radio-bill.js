document.addEventListener('DOMContentLoaded', function() {

  var radioBtn = document.querySelector(".billItemTypeRadio");
  var radioAddBtn = document.querySelector(".radioBillAddBtn");
  var radioCallTotal = document.querySelector(".callTotalTwo");
  var radioSmsTotal = document.querySelector(".smsTotalTwo");
  var radioTotal = document.querySelector(".totalTwo");

  var widgetradio = radioBill();

  function otherBill() {
    var latestTotal = radioTotal.innerHTML

    if (latestTotal >= 50) {
      radioTotal.classList.add("danger");
    }
    if (latestTotal < 50) {
      radioTotal.classList.remove("danger");
    }

    if (latestTotal >= 30) {
      radioTotal.classList.add("warning");
    }
    if (latestTotal < 30) {
      radioTotal.classList.remove("warning");
    }
  }

  radioAddBtn.addEventListener('click', function() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

    if (checkedRadioBtn) {
      var radioBtn = checkedRadioBtn.value;
      var bill = widgetradio.billCalculate(radioBtn);
      radioCallTotal.innerHTML = widgetradio.getCallTotal().toFixed(2);
      radioSmsTotal.innerHTML = widgetradio.getSmsTotal().toFixed(2);
      radioTotal.innerHTML = widgetradio.getTotal().toFixed(2);
    }
    otherBill();
  });
});
