var expect = require('chai').expect;
var fs = require('fs');
var resemble = require('node-resemble-js')

describe('test page', function() {
   it('should look like test page', function () {
       browser.url('http://localhost:8080');
       if (fs.existsSync('baselines/myImage.png')) {
            fs.unlink('shots/myImage.png');  
            browser.saveScreenshot('shots/myImage.png');
            var baseline = fs.readFileSync('baselines/myImage.png');
            var shot = fs.readFileSync('shots/myImage.png');
            resemble(baseline).compareTo(shot).onComplete(function(data){
                expect(data.misMatchPercentage).is.lessThan('0.05');
            });

        }
        else {
            browser.saveScreenshot('./baselines/myImage.png');
        }
       
});
});