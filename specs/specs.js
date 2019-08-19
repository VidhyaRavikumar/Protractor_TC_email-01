describe('Gmail', function() {
beforeEach(function(){
browser.driver.ignoreSynchronization = true;

});
it('NavGmail', function() {
browser.driver.get('http://gmail.com');
browser.driver.findElement(by.id('identifierId')).sendKeys(browser.params.login.email);
browser.driver.findElement(by.id('identifierNext')).click(); 
browser.driver.sleep(5000);
browser.driver.findElement(by.xpath("//input[@type='password']")).sendKeys(browser.params.login.password);
browser.driver.findElement(by.id('passwordNext')).click(); 
browser.driver.sleep(5000);
browser.driver.get('https://mail.google.com/mail/u/0/#inbox?compose=new')
browser.driver.sleep(5000);
browser.driver.findElement(by.xpath("//textarea[@name='to']")).sendKeys(browser.params.login.sendtoemail);
browser.driver.findElement(by.xpath("//input[@name='subjectbox']")).sendKeys(browser.params.login.cmsub);
browser.driver.sleep(5000);
browser.driver.findElement(by.xpath("//div[@class='T-I J-J5-Ji aoO v7 T-I-atl L3']")).click();
browser.driver.get('https://mail.google.com/mail/u/0/#sent')
browser.driver.sleep(5000);

});
});


