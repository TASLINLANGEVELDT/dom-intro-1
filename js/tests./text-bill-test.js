describe('textBillTotal' , function(){
    it('Should take in a variable either call or sms and when you click the add Btn it will add the amount of the variable by as many times as you click "add" and it will give you yur smsTotal and callsTotal as well as a whole total' , function(){

        assert.equal(call('click', 'click', 'click'), R8.25);

    });

});
