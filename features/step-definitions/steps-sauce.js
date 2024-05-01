import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'


Given("user is on sauce-demo page", async () => {
    await browser.url("https://www.saucedemo.com/")
})

When(/^user input username with "(.*)"$/, async (username) => {
    (await browser.$('#user-name')).setValue(username)
})


When(/^user input password with "(.*)"$/, async (password) => {
    (await browser.$('#password')).setValue(password)

})

When(/^user click button$/, async () => {
    (await browser.$('#login-button')).click()

})

Then(/^user should redirect to homepage$/, async () => {
    const pageText = await browser.$('body')
    expect(pageText).toHaveTextContaining("Sauce Labs Backpack")
    await browser.pause(1000)
})


Then(/^user checkout$/, async () => {
    const CheckoutButton = await browser.$('#add-to-cart-sauce-labs-backpack')
    await CheckoutButton.click()
    // browser.$('#add-to-cart-sauce-labs-backpack').click()
     await browser.pause(1000)
    // await expect(CheckoutButton).toHaveText("remove-sauce-labs-backpack")
    const pageText2 = await browser.$('body')
    expect(pageText2).toHaveTextContaining("#remove-sauce-labs-backpack")
})