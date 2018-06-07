describe('TextBill', function(){

  it('should return the grand total as R7.00 for 2 sms and 2 calls', function(){

    var addTotal = TextBillTotal();

        TextBillTotal('call');
        TextBillTotal('call');
        TextBillTotal('sms');
        TextBillTotal('sms');

      return;

  assert.equal(TextBillTotal, Total());
  });

    it('should return the sms total R3.00 for 4 sms only', function(){

      var addSms = TextBillTotal();

          TextBillTotal('sms');
          TextBillTotal('sms');
          TextBillTotal('sms');
          TextBillTotal('sms');
        return;
    });


})
