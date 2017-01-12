var expect = require('chai').expect;
var fs = require('fs');
var resemble = require('node-resemble-js')

describe('test page', function() {
   it('should look like test page', function () {
       browser.url('http://localhost:8080');
       if (fs.existsSync('baselines/myImage.png')) {
           if (fs.existsSync('shots/myImage.png')) {
            fs.unlink('shots/myImage.png');  
           }
            browser.saveElementScreenshot('shots/myImage.png', 'p');
            var baseline = fs.readFileSync('baselines/myImage.png');
            var shot = fs.readFileSync('shots/myImage.png');
            var result = resemble(baseline).compareTo(shot).onComplete(function(data){
                expect(data.misMatchPercentage).is.lessThan('0.05');
            });
        }
        else {
            browser.saveElementScreenshot('./baselines/myImage.png', 'p');
        }
       
});
});