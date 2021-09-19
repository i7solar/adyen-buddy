const adyenBuddy = require("./0_1_25.js");

// Adyen Key from a random 0_1_25 website.
const ADYEN_KEY = "10001|A1B774BB84EFE5C52C65D14ACB83F616B7BA568EAAD84C419F8FAEB9FC34CDE896D8E4239FE5D5B1AD8EC720009998BA586C698310FB09B3FE62B44AC5D5FED026097B9A635161C120DBFA46CBD4030B944F9C66886721650E82F743943C829018C8BB0081AA28F897FFBD98437A78A553E73774C0EF2C61AD718AA80B67D61B0A9CED052F417966AABCC594FF19FC9FACDCA28043F76B0EE76A47ADACDE183C56C59AB22FB8E5247F7A071B31BF3466396D5E946F2621C01547E04848C9D0020ADB8A7E9254DCB0CAE8C18B2033EEC7DC2B26D98C37D37357862BEFCCB0DEFDEDCA20CAF1822DE1CF85B66D1A0F9AF876FAADC26E50576021D601CEB9D8E797";

// Card data from: https://docs.adyen.com/development-resources/test-cards/test-card-numbers#american-express-amex
const CARD_DATA = {
    number: "3700 0000 0000 002", // 'xxxx xxxx xxxx xxxx'
    holderName: "Michael Jordan", // First Last
    expiryMonth: "02", //'MM'
    expiryYear: "2025", // 'YYYY'
    cvc: "7373", //'xxx'
    generationtime: new Date().toISOString(),
};
var adyenObject;

// EncryptCardWithAdyen - usage: Takes in an adyen key, and card data(number, name, expiry month, expiry year, cvv, generation time)
function EncryptCardWithAdyen(adyenKey, cardData){
    try { // Wrap it in a try catch if any errors happen.

        // Create an adyen instance
        var adyenInstance = adyenBuddy.createEncryption(adyenKey, {});

        // Validate the card data
        adyenInstance.validate(cardData);
        
        // Encrypt the card data
        var encryptedData = {
            encryptedCardNumber: adyenInstance.encrypt({
                number: cardData.cardNumber,
                generationtime: new Date().toISOString(),
            }),
            encryptedExpiryMonth: adyenInstance.encrypt({
                expiryMonth: cardData.expirationMonth,
                generationtime: new Date().toISOString(),
            }),
            encryptedExpiryYear: adyenInstance.encrypt({
                expiryYear: cardData.expirationYear,
                generationtime: new Date().toISOString(),
            }),
            encryptedSecurityCode: adyenInstance.encrypt({
                cvc: cardData.securityCode,
                generationtime: new Date().toISOString(),
            }),
        };
        
        // Assign adyenObject with values
        adyenObject = {
            adyenCC: encryptedData["encryptedCardNumber"],
            adyenEM: encryptedData["encryptedExpiryMonth"],
            adyenEY: encryptedData["encryptedExpiryYear"],
            adyenCVC: encryptedData["encryptedSecurityCode"]
        }

        return adyenObject
    }
    catch (e)
    {
        console.log(e)
        return null;
    }
}

console.log(EncryptCardWithAdyen(ADYEN_KEY, CARD_DATA));
