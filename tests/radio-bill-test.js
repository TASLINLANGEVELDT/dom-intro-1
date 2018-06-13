describe('RadioBill', function(){

  it("The function is testing the value of call and sms and checking the total", function() {
    var factoryRadio = radioBill();

    factoryRadio.billCalculate('call');
    factoryRadio.billCalculate('sms');
    factoryRadio.billCalculate('call');
    assert.equal(factoryRadio.getTotal(), 6.25);

  });

  it("The function is testing the value of call and giving the total", function() {
    var factoryRadio = radioBill();

    factoryRadio.billCalculate('call');
    factoryRadio.billCalculate('call');

    assert.equal(factoryRadio.getTotal(), 5.50);

  });

  it("The function is adding call and sms and totalling this", function() {

    var factoryRadio = radioBill();

    factoryRadio.billCalculate('call');
    factoryRadio.billCalculate('call');
    factoryRadio.billCalculate('sms');
    factoryRadio.billCalculate('sms');
    assert.equal(factoryRadio.getTotal(), 7);

  });

});
