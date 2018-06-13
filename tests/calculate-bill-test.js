describe('CalculateBill' , function(){
    it('should take in a string of calls and smses and add them up and give you one total.' , function(){

        totalPhoneBill("sms");
        totalPhoneBill("sms");
        totalPhoneBill("sms");
        totalPhoneBill("call")

         return 5.00;

    });
    it('The total should turn orange when you reach the warning level which is over R20.' , function(){

      var radioTotal;

        assert.equal(totalPhoneBill('call'), 2.75);
        assert.equal(totalPhoneBill('call'), 2.75);
        assert.equal(totalPhoneBill('call'), 2.75);
        assert.equal(totalPhoneBill('call'), 2.75);
        assert.equal(totalPhoneBill('call'), 2.75);
        assert.equal(totalPhoneBill('call'), 2.75);
        assert.equal(totalPhoneBill('call'), 2.75);
        assert.equal(totalPhoneBill('call'), 2.75);

          return 21.50 ;("over warning")
    });
    it('The total should turn red once it reaches the danger level which is over R30.' , function(){

        assert.equal(totalPhoneBill('call'), 2.75);
        assert.equal(totalPhoneBill('sms'), 0.75);
        assert.equal(totalPhoneBill('sms'), 0.75);
        assert.equal(totalPhoneBill('call'), 2.75);
        assert.equal(totalPhoneBill('sms'), 0.75);
        assert.equal(totalPhoneBill('call'), 2.75);
        assert.equal(totalPhoneBill('call'), 2.75);
        assert.equal(totalPhoneBill('sms'), 0.75);
        assert.equal(totalPhoneBill('call'), 2.75);
        assert.equal(totalPhoneBill('call'), 2.75);
        assert.equal(totalPhoneBill('call'), 2.75);
        assert.equal(totalPhoneBill('call'), 2.75);
        assert.equal(totalPhoneBill('call'), 2.75);
        assert.equal(totalPhoneBill('sms'), 0.75);
        assert.equal(totalPhoneBill('sms'), 0.75);
        assert.equal(totalPhoneBill('sms'), 0.75);
        assert.equal(totalPhoneBill('sms'), 0.75);

          return 30.75;("reaches over danger level")
    });

});
