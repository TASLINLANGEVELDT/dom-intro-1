describe('CalculateBill' , function(){
    it('should take in a string of calls and smses and add them up and give you one total.' , function(){

        assert.equal(totalPhoneBill("sms,sms,sms,call,"), 5.00);

    });
    it('The total should turn orange when you reach the warning level which is over R20.' , function(){

        assert.equal(totalPhoneBill('call,call,call,call,call,call,call,sms,sms,sms'),  21.50);

    });
    it('The total should turn red once it reaches the danger level which is over R30.' , function(){

        assert.equal(totalPhoneBill('call,call,call,call,call,call,call,sms,sms,sms,call,call,call,call,call,call,call,sms,sms,sms.call,call,call,call,call,call,call,sms,sms,sms'), 61.00);

    });

});
