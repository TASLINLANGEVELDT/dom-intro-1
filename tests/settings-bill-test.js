describe('SettingsBill', function(){

    it('should return the calls total as R8.25 for 3 calls only', function(){

          assert.equal(totalPhoneBill("call,call,call,"), 8.25)

    });

    it('should return the sms total as R3.00 for 4 sms only', function(){


          assert.equal(totalPhoneBill("sms,sms,sms,sms"), 3.00)
    });

    it('should return the grand total as R7.00 for 2 sms and 2 calls', function(){

      assert.equal(totalPhoneBill("sms,sms,call,call"), 7.00)
    });

    it('should stop calculating immediately after critical level value (15) is reached', function(){

      assert.equal(totalPhoneBill("sms,sms,call,call,sms,call,sms,call,call"), 16.75)
    });
});
