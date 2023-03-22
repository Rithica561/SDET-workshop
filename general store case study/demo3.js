

describe('general store testing', () => {
    it('main page', async() => {
        await $('android.widget.Spinner').click()
       // await driver.pause(4000);
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text("Australia"))').click()
       // await driver.pause(3000)
        await $('android.widget.EditText').setValue('rithica')
      //  await driver.pause(3000)
        await $('//*[@text="Female"]').click()
      //  await driver.pause(3000)
        await $('android.widget.Button').click()
        await $('//*[@class ="android.widget.TextView"][2]').click()
    //     await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.FrameLayout/android.support.v7.widget.RecyclerView/android.widget.RelativeLayout[1]/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.TextView[2]').click()
       await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.FrameLayout/android.support.v7.widget.RecyclerView/android.widget.RelativeLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.TextView[2]').click()
       await driver.pause(3000)
       await $('android.widget.FrameLayout').click()
        await $('android.widget.CheckBox').click()
       await $('//*[@text="Visit to the website to complete purchase"]').click()
       //await driver.getContexts();
       await driver.pause(7000)
       await driver.switchContext('WEBVIEW_com.androidsample.generalstore')
       //await $('//*[@name="q"]').addValue("cypress");
       //await driver.switchContext('Native_APP')
       await DriverCommand.back()

    });

});

