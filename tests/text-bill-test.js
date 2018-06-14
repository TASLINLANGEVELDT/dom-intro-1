describe('TextBill', function(){

  it("In this function it takes in both a call and sms and once you add the two values you get a all rounded total", function() {

    var myFactoryFunct = TextBillTotalfact();

    myFactoryFunct.assignValue('sms');
    myFactoryFunct.assignValue('call');

    assert.equal(myFactoryFunct.total(), 3.50);

  });

  it("In this function it checks for the value of your variable and gives you a total.", function() {

    var myFactoryFunct = TextBillTotalfact();

    myFactoryFunct.assignValue('sms');

    assert.equal(myFactoryFunct.total(), 0.75);

  });
})
