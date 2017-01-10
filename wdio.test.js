var expect = require('chai').expect;
describe('webdriver.io api page', function() {
   it('should get the title of the document', function () {
    browser.url('http://localhost:8080');
    var title = browser.getTitle();
    expect(title).to.equal("This is my page");
    console.log(title);
    // outputs the following:
    // "WebdriverIO - Selenium 2.0 javascript bindings for nodejs"
});
});