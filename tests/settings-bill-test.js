describe('settingsBill', function(){
  it("'The function should take in a call or sms value and tally this total accordingly", function(){


    var factorySettings = factoryValues();

    factorySettings.settingsKey(5)
    factorySettings.settingsKey(10)
    factorySettings.settingsKey(15)
    factorySettings.settingsKey('call');

    assert.equal(factorySettings.totalCS(),5);
  });

  it("'The function is testing the cost of a call and checking the total bill", function(){


    var factorySettings = settingUpdates();

    factorySettings.costOfCall(10)
    factorySettings.costWarning(20)
    factorySettings.costCritical(30)
    factorySettings.calculateBill('call');

    assert.equal(factorySettings.allIn(),10);
});
    it("'The function is checking the cost of sms and call and giving the total.", function(){


      var factorySettings = settingUpdates();

      factorySettings.costOfSMS(5)
      factorySettings.costOfCall(2)
      factorySettings.costWarning(20)
      factorySettings.costCritical(30)
      factorySettings.calculateBill('call');
      factorySettings.calculateBill('sms');

      assert.equal(factorySettings.totalCS(),7);

  });

  it("'The function is testing whether the bill total is above critical", function(){


    var factorySettings = settingUpdates();

    factorySettings.costOfSMS(5)
    factorySettings.costOfCall(5)
    factorySettings.costWarning(5)
    factorySettings.costCritical(9)
    factorySettings.calculateBill('call');
    factorySettings.calculateBill('sms');

    assert.equal(factorySettings.totalCS(),10);

});

});
