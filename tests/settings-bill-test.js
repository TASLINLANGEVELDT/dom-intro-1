describe('settingsBill', function(){
  var factorySettings = factoryValues();
  //
  it('Should update call cost value', function(){
    assert.equal(factorySettings.updateCall(5),5)
  })

  it('Should update sms cost value', function(){
    assert.equal(factorySettings.updateCall(2.3),2.3)
  })

  it('Should update warning level value', function(){
    assert.equal(factorySettings.updateWarning(30),30)
  })

  it('Should update critical level value', function(){
    assert.equal(factorySettings.updateCritical(50),50)
  })

  it('Should add calls and return the total', function(){
    factorySettings.updateCall(5)
    factorySettings.addSettingsBill('call')
    assert.equal(factorySettings.getCallTotal(),5)
  })

  it('Should add sms and return the total', function(){
    factorySettings.updateSms(2.3)
    factorySettings.addSettingsBill('sms')
    assert.equal(factorySettings.getSmsTotal(),2.3)
  })

});
