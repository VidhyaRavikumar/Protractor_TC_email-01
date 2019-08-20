describe('Gmail', function() {
    var B=browser.driver
    beforeEach(function(){
        B.ignoreSynchronization = true
    });
    afterEach(function() {
        B.sleep(5000);
    });

    it('emailid', function() {
        B.get('http://gmail.com');
        B.findElement(by.name('identifier')).sendKeys(browser.params.login.email);
        B.findElement(by.id('identifierNext')).click(); 
        });

    it('passwd', function() {
        B.findElement(by.xpath("//input[@type='password']")).sendKeys(browser.params.login.password);
        B.findElement(by.id('passwordNext')).click(); 
        });

    it('composeurl', function() {
        B.get('https://mail.google.com/mail/u/0/#inbox?compose=new')
        });

    it('composemail', function() {
        B.findElement(by.xpath("//textarea[@name='to']")).sendKeys(browser.params.login.sendtoemail);
        B.findElement(by.xpath("//input[@name='subjectbox']")).sendKeys(browser.params.login.cmsub);
        });

    it('send_sent', function() {
        B.findElement(by.xpath("//div[@class='T-I J-J5-Ji aoO v7 T-I-atl L3']")).click();
        B.get('https://mail.google.com/mail/u/0/#sent')
        });
});


