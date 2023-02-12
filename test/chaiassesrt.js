const { expect } = require ('chai').assert;
const { describe, it } = require ('mocha');

//Chai Assert
describe('app', function(){
    it('app should return welcome messege', function(){
        let response = "Welcome Belajar QA API Automation";
        expect(response).to.equal("Welcome Belajar QA API Automation")
    })
})
