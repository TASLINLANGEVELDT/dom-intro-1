describe('TextBill', function(){

  it('should return the grand total as R7.00 for 2 sms and 2 calls', function(){

    var addTotal = TextBillTotal();

        TextBillTotal('call');
        TextBillTotal('call');
        TextBillTotal('sms');
        TextBillTotal('sms');

      TextBillTotal.smserTotal();

  assert.equal(TextBillTotal, Total());
  });

    it('should return the sms total R3.00 for 4 sms only', function(){

      var addSms = TextBillTotal();

          addSms.calculation('sms');
          addSms.calculation('sms');
          addSms.calculation('sms');
          addSms.calculation('sms');

    assert.equal(3.00, addSms.returnSms());
    });

    it('should return the calls total as R8.25 for 3 calls only', function(){

      var addCalls = TextBillTotal();

          addCalls.calculation('call');
          addCalls.calculation('call');
          addCalls.calculation('call');

    assert.equal(8.25, addCalls.returnCalls());
    });

})
