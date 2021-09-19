# Adyen Buddy 🤗

With the assistance of the Adyen scripts from /collections, you can use this script to encrypt your payment information with Adyen easy!

## How do I use this?

- Use main function ``EncryptCardWithAdyen(argument1,argument2)``

- Based on the version of Adyen you'll need edit the adyenBuddy constant on Line 1 from adyen.js based on your version.
  ex. ``const adyenBuddy = require("./collection/0_1_23.js");``
   
- Replace the ADYEN_KEY constant with the Adyen key from the website. - Argument 1

- Input your own CARD_DATA object into the second argument with your own values and tada! ✨ - Argument 2


## Example
```
const adyenBuddy = require("./collection/0_1_25.js");

// Adyen Key from a random 0_1_25 website.
const ADYEN_KEY = "10001|A1B774BB84EFE5C52C65D14ACB83F616B7BA568EAAD84C419F8FAEB9FC34CDE896D8E4239FE5D5B1AD8EC720009998BA586C698310FB09B3FE62B44AC5D5FED026097B9A635161C120DBFA46CBD4030B944F9C66886721650E82F743943C829018C8BB0081AA28F897FFBD98437A78A553E73774C0EF2C61AD718AA80B67D61B0A9CED052F417966AABCC594FF19FC9FACDCA28043F76B0EE76A47ADACDE183C56C59AB22FB8E5247F7A071B31BF3466396D5E946F2621C01547E04848C9D0020ADB8A7E9254DCB0CAE8C18B2033EEC7DC2B26D98C37D37357862BEFCCB0DEFDEDCA20CAF1822DE1CF85B66D1A0F9AF876FAADC26E50576021D601CEB9D8E797";
```

## Contributing

Contributions are welcome, but please follow these contributor guidelines:

- Create an issue on [the issue tracker](https://github.com/i7solar/adyen-buddy/issues/new) to discuss potential changes before submitting a pull request.
- Include at least one test to cover any new functionality or bug fixes.
- Make sure that all of your tests are passing and that there are no merge conflicts.
